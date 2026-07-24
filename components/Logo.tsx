/**
 * Wortmarke mit Globus-Gitternetz — nimmt das Motiv des bestehenden
 * CIC-Global-Logos auf, aber als SVG statt als PNG mit weißem Hintergrund.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 shrink-0 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="16" cy="16" r="12" />
        <ellipse cx="16" cy="16" rx="5" ry="12" />
        <path d="M4 16h24" />
        <path d="M6.6 9.2c2.6 1.8 5.9 2.8 9.4 2.8s6.8-1 9.4-2.8" />
        <path d="M6.6 22.8c2.6-1.8 5.9-2.8 9.4-2.8s6.8 1 9.4 2.8" />
      </svg>
      <span className="font-mono text-sm tracking-[0.16em] text-fg">
        CIC<span className="text-gold">-</span>GLOBAL
      </span>
    </span>
  );
}
