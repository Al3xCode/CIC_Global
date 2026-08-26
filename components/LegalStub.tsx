import { site } from "@/lib/site";

/**
 * Platzhalterseite für Impressum und Datenschutz.
 *
 * Bewusst leer: Die Pflichtangaben eines Versicherungs- bzw.
 * Finanzanlagenvermittlers (Erlaubnis nach §34d/§34f GewO,
 * Vermittlerregister-Nummer, Berufshaftpflicht, Schlichtungsstelle)
 * müssen vom Betreiber kommen und rechtlich geprüft werden.
 */
export function LegalStub({
  title,
  intro,
  missing,
}: {
  title: string;
  intro: string;
  missing: string[];
}) {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="mt-5 text-[2rem] sm:text-2xl lg:text-3xl">{title}</h1>
        <p className="mt-6 text-lg text-fg-muted">{intro}</p>

        <div className="mt-12 border border-gold/30 bg-surface p-8">
          <p className="font-mono text-2xs uppercase tracking-[0.18em] text-gold">
            Entwurfsstand — Inhalt folgt
          </p>
          <p className="mt-4 text-sm text-fg-muted">
            Diese Seite ist im Entwurf noch nicht ausformuliert. Vor dem Livegang werden hier
            folgende Angaben benötigt:
          </p>
          <ul className="mt-6 flex flex-col gap-2">
            {missing.map((m) => (
              <li key={m} className="flex gap-3 text-sm text-fg-muted">
                <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-gold-soft" />
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-xs text-fg-muted">
            Rückfragen an{" "}
            <a href={`mailto:${site.email}`} className="text-gold transition-colors hover:text-gold-bright">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
