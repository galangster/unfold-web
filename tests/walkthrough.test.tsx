import { afterEach, beforeAll, test } from "vitest";
import assert from "node:assert/strict";
import { act, createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { IPhoneMockup } from "../components/iphone-mockup";

const mediaQueries = new Map<string, MediaQueryList>();
const playing = new WeakSet<HTMLMediaElement>();
let root: Root | undefined;

beforeAll(() => {
  Object.assign(globalThis, {
    IntersectionObserver: class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
    IS_REACT_ACT_ENVIRONMENT: true,
  });
  window.scrollTo = () => {};
  window.matchMedia = (query: string) => {
    if (!mediaQueries.has(query)) {
      const events = new window.EventTarget();
      mediaQueries.set(query, {
        media: query,
        matches: false,
        onchange: null,
        addListener: (listener) => events.addEventListener("change", listener as EventListener),
        removeListener: (listener) => events.removeEventListener("change", listener as EventListener),
        addEventListener: events.addEventListener.bind(events),
        removeEventListener: events.removeEventListener.bind(events),
        dispatchEvent: events.dispatchEvent.bind(events),
      } as MediaQueryList);
    }
    return mediaQueries.get(query)!;
  };
  // JSDOM has no media engine. Model its public playback state at that boundary.
  Object.defineProperty(window.HTMLMediaElement.prototype, "paused", {
    configurable: true,
    get() { return !playing.has(this); },
  });
  window.HTMLMediaElement.prototype.play = async function () { playing.add(this); };
  window.HTMLMediaElement.prototype.pause = function () { playing.delete(this); };
});

afterEach(async () => {
  await act(async () => root?.unmount());
  root = undefined;
  window.document.body.replaceChildren();
});

function setReducedMotion(matches: boolean) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  Object.defineProperty(query, "matches", { configurable: true, value: matches });
  const event = new window.Event("change");
  Object.defineProperty(event, "matches", { value: matches });
  query.dispatchEvent(event);
}

async function openWalkthrough() {
  const container = window.document.createElement("div");
  window.document.body.append(container);
  root = createRoot(container);
  await act(async () => root!.render(createElement(IPhoneMockup)));
  await act(async () => window.dispatchEvent(new window.Event("scroll")));
  const video = container.querySelector("video");
  assert.ok(video, "The homepage displays the product walkthrough");
  assert.ok(video.querySelector("source"), "Scrolling makes the walkthrough available");
  return video;
}

test("the walkthrough starts, pauses, and resumes with the visitor's motion preference", async () => {
  const video = await openWalkthrough();
  assert.equal(video.paused, false, "The component starts playback when the source becomes available");
  assert.equal(video.autoplay, true);

  await act(async () => setReducedMotion(true));

  assert.equal(video.paused, true, "An active preview must stop when Reduce Motion is enabled");
  assert.equal(video.autoplay, false);

  await act(async () => setReducedMotion(false));

  assert.equal(video.paused, false, "The component resumes playback when Reduce Motion is disabled");
  assert.equal(video.autoplay, true);
});
