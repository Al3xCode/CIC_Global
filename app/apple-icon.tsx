import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Homescreen-Icon (iOS) — größer als der Tab-Favicon, trägt darum das
 * volle Globus-Gitternetz inklusive der beiden Breitenkreise. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0c",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32" fill="none" stroke="#be9b53" strokeWidth="1.1">
          <circle cx="16" cy="16" r="12" />
          <ellipse cx="16" cy="16" rx="5" ry="12" />
          <path d="M4 16h24" />
          <path d="M6.6 9.2c2.6 1.8 5.9 2.8 9.4 2.8s6.8-1 9.4-2.8" />
          <path d="M6.6 22.8c2.6-1.8 5.9-2.8 9.4-2.8s6.8 1 9.4 2.8" />
        </svg>
      </div>
    ),
    size
  );
}
