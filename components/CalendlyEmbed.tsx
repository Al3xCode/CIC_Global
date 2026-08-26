"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { CalendarClock } from "lucide-react";

/**
 * Calendly lädt erst nach Klick. Bis dahin passiert keine Verbindung zu
 * Calendly und es werden keine Cookies gesetzt — das Formular selbst
 * funktioniert unabhängig davon weiter.
 *
 * Die alten background_color/text_color-URL-Parameter werden von Calendly
 * inzwischen ignoriert (Branding kommt nur noch aus den Account-Settings) —
 * das Widget bleibt weiß. Deshalb bekommt es hier einen bewussten hellen
 * Rahmen statt gegen ein weißes Rechteck auf Schwarz anzukämpfen, analog zum
 * "Über uns"-Papier-Einschub auf der Startseite.
 */
const CALENDLY_URL = "https://calendly.com/kontakt-cic-global/30min?hide_event_type_details=1";

const FALLBACK_HEIGHT = 480;
// Calendly meldet die Höhe mehrfach nacheinander, während Schrift, Layout und
// Cookie-Banner nachladen. Statt jede Zwischenhöhe sofort sichtbar zu machen
// (das sichtbare Auf-und-Zu), warten wir, bis kurz keine neue Meldung mehr
// kommt, und blenden dann einmal sauber ein.
const SETTLE_DELAY = 1200;
// Sobald Calendly mit "calendly.event_type_viewed" bestätigt, dass die Seite
// tatsächlich angezeigt wird, ist das eine eindeutige Antwort — dann reicht
// eine viel kürzere Restwartezeit, statt stur die volle Zeit abzuwarten.
const CONFIRMED_SETTLE_DELAY = 300;
const MAX_WAIT = 7000;

export function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState(FALLBACK_HEIGHT);
  const [ready, setReady] = useState(false);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const confirmed = useRef(false);

  useEffect(() => {
    if (!loaded) return;

    function reveal() {
      setReady(true);
    }

    function scheduleReveal(delay: number) {
      if (settleTimer.current) clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(reveal, delay);
    }

    function onMessage(event: MessageEvent) {
      if (event.origin !== "https://calendly.com") return;
      const type = event.data?.event;

      if (type === "calendly.event_type_viewed") {
        confirmed.current = true;
        scheduleReveal(CONFIRMED_SETTLE_DELAY);
        return;
      }

      if (type !== "calendly.page_height") return;
      // Calendly schickt die Höhe als String mit Einheit ("738px"), nicht als Zahl.
      const next = parseFloat(event.data.payload?.height);
      if (!Number.isFinite(next) || next <= 0) return;

      setHeight(next);
      scheduleReveal(confirmed.current ? CONFIRMED_SETTLE_DELAY : SETTLE_DELAY);
    }

    window.addEventListener("message", onMessage);
    // Sicherheitsnetz: falls nie eine eindeutige Antwort kommt, trotzdem
    // anzeigen statt für immer im Ladezustand zu bleiben.
    const fallbackTimer = setTimeout(reveal, MAX_WAIT);

    return () => {
      window.removeEventListener("message", onMessage);
      if (settleTimer.current) clearTimeout(settleTimer.current);
      clearTimeout(fallbackTimer);
    };
  }, [loaded]);

  if (!loaded) {
    return (
      <div className="mx-auto flex min-h-[360px] max-w-3xl flex-col items-center justify-center border border-white/12 bg-surface p-8 text-center sm:p-10">
        <CalendarClock aria-hidden size={26} strokeWidth={1.5} className="text-gold" />
        <p className="mt-5 font-display text-lg">Kalender laden</p>
        <p className="mt-2 max-w-sm text-sm text-fg-muted">
          Dafür binden wir Calendly ein. Erst mit Klick wird der Kalender geladen — vorher findet
          keine Verbindung zu Calendly statt.
        </p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="btn-secondary mt-6 flex min-h-11 items-center px-5 text-sm"
        >
          Termin-Kalender anzeigen
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className="relative mx-auto max-w-3xl overflow-hidden bg-paper p-2 sm:p-3"
        style={{ height: ready ? height + 16 : FALLBACK_HEIGHT }}
      >
        {!ready && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-ink-fg-muted/25 border-t-gold" />
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-fg-muted">
              Kalender wird geladen …
            </p>
          </div>
        )}
        <div
          className="calendly-inline-widget"
          data-url={CALENDLY_URL}
          style={{
            minWidth: "320px",
            height: `${height}px`,
            opacity: ready ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      </div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
