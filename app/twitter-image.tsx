import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-static";

export const alt = "Unfold - Personalized Daily Devotionals";
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #C8A55C, #e0c078, #C8A55C)",
          }}
        />

        {/* App Icon */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "24px",
            background: "#C8A55C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            boxShadow: "0 16px 48px rgba(200, 165, 92, 0.3)",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 20 C30 10, 40 5, 50 5 C60 5, 70 10, 70 20 V80 C70 85, 65 90, 60 90 H40 C35 90, 30 85, 30 80 V20Z"
              fill="#1a1a1a"
            />
            <path
              d="M45 35 L55 45 L45 55"
              stroke="#1a1a1a"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#f5f0eb",
            marginBottom: "16px",
            textAlign: "center",
            fontFamily: "serif",
          }}
        >
          Unfold
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "28px",
            color: "#C8A55C",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Your personal spiritual journey awaits
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
