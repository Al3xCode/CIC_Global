import { ImageResponse } from "next/og";

export const alt = "CIC-Global — Finanzberatung & Absicherung in Gelsenkirchen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Greift das Zeitachsen-Motiv der Seite auf: eine Goldlinie mit Punkten. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0c",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#be9b53" }}>
          CIC-GLOBAL
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.1,
              color: "#edeae3",
              maxWidth: 900,
            }}
          >
            Finanzielle Sicherheit beginnt mit der richtigen Beratung.
          </div>

          {/* Zeitachse */}
          <div style={{ display: "flex", alignItems: "center", marginTop: 56 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    backgroundColor: "#be9b53",
                  }}
                />
                {i < 4 && <div style={{ width: 220, height: 2, backgroundColor: "#6d5a31" }} />}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 24,
              fontSize: 20,
              color: "#9c978c",
              width: 950,
            }}
          >
            <span>Tag 0</span>
            <span>Strom &amp; Gas</span>
            <span>Versicherung</span>
            <span>Investments</span>
            <span>Vorsorge</span>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#9c978c" }}>
          Gelsenkirchen · cic-global.de
        </div>
      </div>
    ),
    size
  );
}
