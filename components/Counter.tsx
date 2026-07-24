"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Zählt beim Scrollen auf den Zielwert hoch.
 *
 * Drei Dinge sind hier bewusst so gebaut:
 *
 * 1. Serverseitig steht sofort die echte Zahl im HTML. Ohne JavaScript —
 *    und für Suchmaschinen — ist "150+" da, nicht "0+".
 * 2. Auf 0 zurückgesetzt wird erst im useLayoutEffect, also vor dem ersten
 *    Paint. Dadurch blitzt die Endzahl nicht kurz auf.
 * 3. Der Start hängt an drei unabhängigen Auslösern (IntersectionObserver,
 *    Scroll-Listener, Timer). Ein Zähler, der bei 0 stehen bleibt, weil ein
 *    Observer nicht feuert, ist der klassische Fehler auf kleinen Screens.
 */
export function Counter({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  useLayoutEffect(() => {
    if (reduce) return;
    setValue(0);
    setArmed(true);
  }, [reduce]);

  useEffect(() => {
    if (!armed || reduce) return;
    const el = ref.current;
    if (!el) return;

    let started = false;

    const isVisible = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    const start = () => {
      if (started) return;
      started = true;
      cleanup();
      animate(0, to, {
        // Bewusst weiches easeOut statt Expo: bei Expo ist der Zähler nach
        // 300 ms faktisch durch, man sieht ihn gar nicht laufen.
        duration: 1.9,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.round(v)),
        onComplete: () => setValue(to),
      });
    };

    const onScroll = () => {
      if (isVisible()) start();
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start();
      },
      { threshold: 0 }
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Letzte Sicherung: bereits sichtbar, aber kein Auslöser hat gefeuert
    const timer = window.setTimeout(() => {
      if (isVisible()) start();
    }, 1200);

    function cleanup() {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    }

    return cleanup;
  }, [armed, reduce, to]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {value}
      {suffix}
    </span>
  );
}
