"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Breiter, langsam driftender Linien-Hintergrund für den Hero. Reine Deko,
 * kein Informationsträger — deshalb bei prefers-reduced-motion komplett
 * weggelassen statt nur eingefroren (eine mitten in der Animation
 * stehengebliebene Linienschar sähe nach Rendering-Fehler aus).
 *
 * viewBox + preserveAspectRatio="none" strecken die Wellen exakt auf die
 * tatsächliche Breite/Höhe des Hero — dadurch laufen sie wirklich von links
 * nach rechts über den ganzen Bereich statt nur in einer Ecke zu kleben.
 */
const VIEW_W = 1440;
const VIEW_H = 640;
const LINE_COUNT = 14;

function buildPaths() {
  return Array.from({ length: LINE_COUNT }, (_, i) => {
    const t = i / (LINE_COUNT - 1);
    const baseY = VIEW_H * (0.06 + t * 0.9);
    const amp = 70 + (i % 4) * 35;
    const dir = i % 2 === 0 ? 1 : -1;
    const c1x = VIEW_W * 0.28;
    const c2x = VIEW_W * 0.68;

    return {
      id: i,
      d: `M -80,${baseY} C ${c1x},${baseY + dir * amp} ${c2x},${baseY - dir * amp} ${
        VIEW_W + 80
      },${baseY}`,
      opacity: 0.16 + (i % 5) * 0.05,
      width: 1 + (i % 3) * 0.6,
      duration: 26 + (i % 6) * 4,
    };
  });
}

export function HeroLines() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const paths = buildPaths();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full text-gold"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="none"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeLinecap="round"
            initial={{ pathLength: 0.4, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, path.opacity, 0],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
