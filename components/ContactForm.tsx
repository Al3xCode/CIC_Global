"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Entwurfsstand: der Versand ist noch nicht angebunden, das Formular zeigt
 * lediglich den Erfolgszustand. Für die Live-Version kommt hier eine Server
 * Action mit Mailversand an kontakt@cic-global.de hin.
 *
 * Die Einwilligungs-Checkbox fehlt auf der bestehenden Seite und ist hier
 * bewusst Pflicht.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div role="status" className="animate-rise-in border border-gold/40 bg-surface p-8">
        <p className="font-display text-lg text-gold">Danke, Ihre Nachricht ist da.</p>
        <p className="mt-3 text-sm text-fg-muted">
          Wir melden uns innerhalb eines Werktags. Wenn es eilig ist, rufen Sie uns gern direkt an.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 min-h-11 text-sm text-fg-muted underline underline-offset-4 transition-colors hover:text-gold"
        >
          Weitere Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-6"
    >
      {/*
        Honeypot gegen Bots. Bewusst per clip-path versteckt statt per
        left:-9999px — Letzteres ragt aus dem Layout heraus und kann auf
        schmalen Screens seitliches Scrollen auslösen.
      */}
      <div
        aria-hidden
        className="absolute h-px w-px overflow-hidden"
        style={{ clipPath: "inset(50%)" }}
      >
        <label htmlFor="firma-zusatz">Bitte leer lassen</label>
        <input id="firma-zusatz" name="firma-zusatz" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id="name" label="Vor- und Nachname" required autoComplete="name" />
      <Field id="telefon" label="Telefonnummer" required type="tel" autoComplete="tel" />
      <Field id="email" label="E-Mail" required type="email" autoComplete="email" />
      <Field id="firma" label="Firmenname" hint="Optional" autoComplete="organization" />

      <div>
        <label htmlFor="nachricht" className="block text-sm text-fg">
          Ihre Nachricht <span className="text-gold">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          className="field mt-2 w-full border border-white/15 bg-surface px-4 py-3 text-base text-fg outline-none placeholder:text-fg-muted/60"
        />
      </div>

      <div className="flex gap-3">
        <input
          id="einwilligung"
          name="einwilligung"
          type="checkbox"
          required
          className="mt-0.5 h-6 w-6 shrink-0 accent-[#be9b53]"
        />
        <label htmlFor="einwilligung" className="py-1.5 text-sm text-fg-muted">
          Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
          gespeichert werden. Details in der{" "}
          <Link href="/datenschutz" className="text-gold underline underline-offset-4">
            Datenschutzerklärung
          </Link>
          . <span className="text-gold">*</span>
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary min-h-12 self-start px-7 text-sm font-medium"
      >
        Nachricht senden
      </button>

      <p className="text-xs text-fg-muted">
        <span className="text-gold">*</span> Pflichtfeld
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline gap-2 text-sm text-fg">
        {label}
        {required && <span className="text-gold">*</span>}
        {hint && <span className="text-xs text-fg-muted">{hint}</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field mt-2 h-12 w-full border border-white/15 bg-surface px-4 text-base text-fg outline-none"
      />
    </div>
  );
}
