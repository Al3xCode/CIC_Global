"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { Service } from "@/lib/site";

/**
 * Die Zeitachse: das Signature-Element der Seite.
 *
 * Die Position auf der Linie ist Information, keine Dekoration — sie sagt,
 * ab wann eine Leistung beim Kunden ankommt. Deshalb ersetzt sie das
 * Kachelraster: aus gleichförmigen Boxen wird eine Abfolge.
 *
 * Desktop: waagerechte Achse über fünf Spalten.
 * Mobil:   dieselbe Achse gekippt, Punkte in der linken Spur.
 *
 * Wichtig: Der Sichtbarkeits-Trigger sitzt auf dem <ol>, nicht auf den
 * einzelnen Punkten. Punkte starten auf scale 0 und sind damit 0x0 Pixel
 * groß — ein solches Element meldet dem IntersectionObserver nie eine
 * Überschneidung und bliebe für immer unsichtbar.
 */
export function Timeline({ services }: { services: Service[] }) {
  const reduce = useReducedMotion();
  /** Zeitfaktor: bei prefers-reduced-motion steht alles ohne Bewegung sofort da. */
  const t = reduce ? 0 : 1;

  const container: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: 0.09 * t, delayChildren: 0.15 * t } },
  };

  const axis: Variants = {
    hidden: { scaleX: 0 },
    shown: { scaleX: 1, transition: { duration: 0.9 * t, ease: [0.16, 1, 0.3, 1] } },
  };

  const dot: Variants = {
    hidden: { scale: 0, opacity: 0 },
    shown: { scale: 1, opacity: 1, transition: { duration: 0.35 * t, ease: "easeOut" } },
  };

  const connector: Variants = {
    hidden: { scaleY: 0 },
    shown: { scaleY: 1, transition: { duration: 0.4 * t, ease: "easeOut" } },
  };

  return (
    <motion.ol
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, amount: "some" }}
      className="relative grid lg:grid-cols-5 lg:gap-x-6"
    >
      {/* Waagerechte Achse — nur ab lg, liegt exakt auf den Punktmitten */}
      <motion.span
        aria-hidden
        data-axis
        variants={axis}
        style={{ transformOrigin: "left center" }}
        className="absolute left-0 right-0 top-9 hidden h-px bg-gold-soft lg:block"
      />

      {services.map((s, i) => (
        <li key={s.title} className="relative pb-10 pl-7 lg:pb-0 lg:pl-0">
          <motion.span
            aria-hidden
            data-axis
            variants={dot}
            className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gold lg:top-8"
          />

          {/* Senkrechte Achse auf Mobil: verbindet diesen Punkt mit dem nächsten */}
          {i < services.length - 1 && (
            <motion.span
              aria-hidden
              data-axis
              variants={connector}
              style={{ transformOrigin: "top center" }}
              className="absolute -bottom-2.5 left-[3.5px] top-2.5 w-px bg-gold-soft lg:hidden"
            />
          )}

          <p className="font-mono text-2xs uppercase leading-5 tracking-[0.18em] text-gold">
            {s.horizon}
          </p>

          {/* Reserviert die Zeile, auf der die waagerechte Achse läuft */}
          <div aria-hidden className="hidden h-8 lg:block" />

          <h3 className="text-xl">{s.title}</h3>
          <p className="mt-1 text-sm text-gold-bright">{s.claim}</p>
          <p className="mt-3 text-sm text-fg-muted">{s.body}</p>
        </li>
      ))}
    </motion.ol>
  );
}
