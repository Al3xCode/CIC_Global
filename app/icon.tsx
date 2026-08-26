import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Browser-Tab-Icon aus dem Globus-Gitternetz der Wortmarke (Logo.tsx).
 * Bei 16–32px sind die feineren Breitenkreise nicht mehr lesbar — deshalb
 * hier nur Kreis, Mittelellipse und Äquator, dafür mit dickerem Strich.
 */
export default function Icon() {
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
        <svg width="23" height="23" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="#be9b53" strokeWidth="2.4" />
          <ellipse cx="16" cy="16" rx="5" ry="12" stroke="#be9b53" strokeWidth="2.2" />
          <path d="M4 16h24" stroke="#be9b53" strokeWidth="2.2" />
        </svg>
      </div>
    ),
    size
  );
}
