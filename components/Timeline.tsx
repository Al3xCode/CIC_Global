"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import type { Service } from "@/lib/site";

/**
 * Die Zeitachse: das Signature-Element der Seite.
 *
 * Die Position auf der Linie ist Information, keine Dekoration — sie sagt,
 * ab wann eine Leistung beim Kunden ankommt.
 *
 * Die Animation hängt direkt an der Scroll-Position, nicht an einem einmaligen
 * Auslöser. Dadurch läuft die Achse beim Zurückscrollen wieder ein: man
 * "zieht" die Zeit vor und zurück, statt nur einmal ein Abspielen auszulösen.
 *
 * Desktop: waagerechte Achse über fünf Spalten.
 * Mobil:   dieselbe Achse gekippt, Punkte in der linken Spur.
 */
export function Timeline({ services }: { services: Service[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();

  // 0 sobald die Liste am unteren Rand auftaucht, 1 wenn ihr Ende die Mitte
  // passiert. Bewusst ein langes Fenster: die Linie zieht sich über eine
  // ganze Bildschirmhöhe, statt in wenigen Pixeln durchzuschnappen.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "end 0.5"],
  });

  // Federung: nimmt dem rohen Scrollwert das Zittern, ohne die Umkehrbarkeit
  // zu verlieren.
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.3,
  });

  return (
    <ol ref={ref} className="relative grid lg:grid-cols-5 lg:gap-x-6">
      {/* Waagerechte Achse — nur ab lg, liegt exakt auf den Punktmitten */}
      <motion.span
        aria-hidden
        data-axis
        style={{
          scaleX: reduce ? 1 : progress,
          transformOrigin: "left center",
        }}
        className="absolute left-0 right-0 top-9 hidden h-px bg-gold-soft lg:block"
      />

      {services.map((service, i) => (
        <TimelineItem
          key={service.title}
          service={service}
          index={i}
          total={services.length}
          progress={progress}
          reduce={!!reduce}
          isLast={i === services.length - 1}
        />
      ))}
    </ol>
  );
}

function TimelineItem({
  service,
  index,
  total,
  progress,
  reduce,
  isLast,
}: {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
  isLast: boolean;
}) {
  const segment = 1 / total;
  const start = index * segment;

  // Der Punkt erscheint zügig am Anfang seines Abschnitts …
  const dotScale = useTransform(progress, [start, start + segment * 0.35], [0, 1]);
  // … die Verbindung zum nächsten Punkt zieht sich über den Rest.
  const connectorScale = useTransform(
    progress,
    [start + segment * 0.2, start + segment],
    [0, 1]
  );

  return (
    <li className="relative pb-10 pl-7 lg:pb-0 lg:pl-0">
      <motion.span
        aria-hidden
        data-axis
        style={{ scale: reduce ? 1 : dotScale }}
        className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gold lg:top-8"
      />

      {/* Senkrechte Achse auf Mobil: verbindet diesen Punkt mit dem nächsten */}
      {!isLast && (
        <motion.span
          aria-hidden
          data-axis
          style={{
            scaleY: reduce ? 1 : connectorScale,
            transformOrigin: "top center",
          }}
          className="absolute -bottom-2.5 left-[3.5px] top-2.5 w-px bg-gold-soft lg:hidden"
        />
      )}

      <p className="font-mono text-2xs uppercase leading-5 tracking-[0.18em] text-gold">
        {service.horizon}
      </p>

      {/* Reserviert die Zeile, auf der die waagerechte Achse läuft */}
      <div aria-hidden className="hidden h-8 lg:block" />

      <h3 className="text-xl">{service.title}</h3>
      <p className="mt-1 text-sm text-gold-bright">{service.claim}</p>
      <p className="mt-3 text-sm text-fg-muted">{service.body}</p>
    </li>
  );
}
