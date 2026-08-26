"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

/**
 * Klassischer Google-Maps-Embed (kein API-Key nötig). Erst nach Klick
 * geladen — vorher findet keine Verbindung zu Google statt.
 */
const MAPS_SRC =
  "https://maps.google.com/maps?q=Johannes-Rau-Allee%203%2C%2045889%20Gelsenkirchen&t=m&z=15&ie=UTF8&output=embed";

export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center border border-white/12 bg-surface p-8 text-center sm:min-h-[405px]">
        <MapPin aria-hidden size={26} strokeWidth={1.5} className="text-gold" />
        <p className="mt-5 font-display text-lg">Karte laden</p>
        <p className="mt-2 max-w-sm text-sm text-fg-muted">
          Beim Laden wird eine Verbindung zu Google aufgebaut und Ihre IP-Adresse übertragen.
        </p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="btn-secondary mt-6 flex min-h-11 items-center px-5 text-sm"
        >
          Karte anzeigen
        </button>
      </div>
    );
  }

  return (
    <iframe
      title="CIC-Global auf Google Maps"
      src={MAPS_SRC}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-[320px] w-full border border-white/12 sm:h-[405px]"
    />
  );
}
