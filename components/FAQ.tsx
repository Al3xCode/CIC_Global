import Link from "next/link";
import { Plus } from "lucide-react";
import type { Faq } from "@/lib/site";

/**
 * Häufige Fragen als natives <details>/<summary> — barrierefrei und ohne
 * JavaScript bedienbar (Tab, Enter, Screenreader-Semantik kommen kostenlos
 * mit). Bewusst kein Custom-Akkordeon: bei einer Finanzberatung wiegt eine
 * Frage, die zuverlässig funktioniert, mehr als eine, die schön einfährt.
 */
export function FAQ({ items }: { items: Faq[] }) {
  return (
    <div className="mt-12 border-t border-ink/8">
      {items.map((f) => (
        <details key={f.question} className="group border-b border-ink/8 py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg">{f.question}</span>
            <Plus
              aria-hidden
              size={18}
              strokeWidth={1.5}
              className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <p className="mt-4 max-w-2xl text-sm text-ink-fg-muted">{f.answer}</p>
        </details>
      ))}

      <p className="mt-8 text-sm text-ink-fg-muted">
        Frage nicht dabei?{" "}
        <Link href="/kontakt" className="text-gold underline underline-offset-4 transition-colors hover:text-gold-bright">
          Schreiben Sie uns direkt.
        </Link>
      </p>
    </div>
  );
}
