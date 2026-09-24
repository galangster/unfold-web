"use client";

import { useEffect, useRef, useState } from "react";

export function IPhoneMockup() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // The walkthrough sits well below the fold, and autoPlay
  // makes the browser fetch it during initial load whatever preload says. The
  // source is attached late instead, on whichever of these happens first:
  // the frame nearing the viewport, the first scroll, or a short safety timer.
  // The timer matters: if IntersectionObserver never delivers a callback the
  // video must still end up playing, so this degrades to a small delay rather
  // than to a permanently blank frame.
  const [videoInView, setVideoInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      video.autoplay = !preference.matches;
      if (preference.matches) {
        video.pause();
      } else if (videoInView) {
        // A browser can deny autoplay. The preview still has its poster.
        void video.play().catch(() => {});
      }
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, [videoInView]);

  useEffect(() => {
    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      setVideoInView(true);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
      io?.disconnect();
    };
    const onScroll = () => load();

    const timer = setTimeout(load, 6000);
    window.addEventListener("scroll", onScroll, { passive: true, once: true });

    let io: IntersectionObserver | undefined;
    const el = frameRef.current;
    if (el && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) load();
        },
        { rootMargin: "400px" }
      );
      io.observe(el);
    }

    return () => {
      done = true;
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <div ref={frameRef} className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-screen">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            aria-hidden="true"
            loop
            muted
            playsInline
            preload="none"
            poster="/unfold-walkthrough-v2-poster.jpg"
          >
            {videoInView && (
              <source src="/unfold-walkthrough-v2.mp4" type="video/mp4" />
            )}
          </video>
        </div>
      </div>
      <span aria-hidden="true" className="phone-button phone-button-action" />
      <span aria-hidden="true" className="phone-button phone-button-volume" />
      <span aria-hidden="true" className="phone-button phone-button-power" />
    </div>
  );
}
