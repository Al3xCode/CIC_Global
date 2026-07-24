"use client";

import Link from "next/link";
import { useState } from "react";

/** Entwurfsstand: noch kein Versanddienst angebunden, nur der Erfolgszustand. */
export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p role="status" className="border border-gold/40 bg-surface px-6 py-5 text-sm text-gold">
        Fast geschafft — bestätigen Sie bitte noch den Link in der E-Mail, die wir Ihnen gerade
        geschickt haben.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-5"
    >
      <div>
        <label htmlFor="newsletter-email" className="block text-sm text-fg">
          E-Mail-Adresse <span className="text-gold">*</span>
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 h-12 w-full max-w-md border border-white/15 bg-surface px-4 text-base text-fg outline-none transition-colors focus:border-gold"
        />
      </div>

      <div className="flex max-w-md gap-3">
        <input
          id="newsletter-einwilligung"
          type="checkbox"
          required
          className="mt-0.5 h-6 w-6 shrink-0 accent-[#be9b53]"
        />
        <label htmlFor="newsletter-einwilligung" className="py-1.5 text-sm text-fg-muted">
          Ich möchte den Newsletter erhalten und kann mich jederzeit wieder abmelden. Details in der{" "}
          <Link href="/datenschutz" className="text-gold underline underline-offset-4">
            Datenschutzerklärung
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        className="min-h-12 self-start bg-gold px-7 text-sm font-medium text-ink transition-colors hover:bg-gold-bright"
      >
        Newsletter abonnieren
      </button>
    </form>
  );
}
