import { Counter } from "@/components/Counter";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Karriere",
  description:
    "Karriere bei CIC-Global in Gelsenkirchen: Werde Teil eines Teams aus 15 Vertriebspartnern und arbeite mit über 386 Kunden an ihrer finanziellen Zukunft.",
  path: "/karriere",
});

export default function Karriere() {
  return (
    <>
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Karriere</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] sm:text-2xl lg:text-3xl">
            Arbeite an etwas, das Menschen dreißig Jahre lang trägt.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-fg-muted">
            Werde Teil von {site.name} und profitiere von attraktiven Benefits, flexiblen
            Arbeitszeiten und einem Team, das sich gegenseitig weiterbringt.
          </p>

          <dl className="mt-14 flex flex-wrap gap-x-14 gap-y-8 border-t border-ink/8 pt-8">
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
                Vertriebspartner
              </dt>
              <dd className="mt-2 font-display text-2xl text-gold">
                <Counter to={15} />
              </dd>
            </div>
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
                Zufriedene Kunden
              </dt>
              <dd className="mt-2 font-display text-2xl text-gold">
                <Counter to={386} suffix="+" />
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <h2 className="text-xl lg:text-2xl">Offene Stellen</h2>

          <div className="mt-8 max-w-3xl border border-ink/12 p-8 sm:p-10">
            <p className="font-mono text-2xs uppercase tracking-[0.18em] text-gold">
              Vertrieb · Haupt- oder nebenberuflich
            </p>
            <h3 className="mt-3 font-display text-xl">Vertriebsmitarbeiter (m/w/d)</h3>

            <p className="mt-5 text-ink-fg-muted">
              Ihr Herz schlägt für Vertrieb und Networking? Sie möchten Kunden begeistern, echten
              Mehrwert schaffen und Ihre berufliche Zukunft selbst in die Hand nehmen? Dann sind
              Sie bei uns richtig.
            </p>
            <p className="mt-4 text-ink-fg-muted">
              Wir begleiten junge Menschen bei ihren ersten finanziellen Schritten, Familien bei
              der Optimierung ihrer Absicherung und Unternehmer, die ihren Betrieb sicher in die
              Zukunft führen wollen. Für dieses Wachstum suchen wir ab sofort motivierte
              Vertriebsmitarbeiter (m/w/d).
            </p>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <p className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
                  Wen wir suchen
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Sie lieben den Umgang mit Menschen und begeistern durch Ihre offene, kommunikative Art.",
                    "Netzwerken ist Ihre Stärke, und Sie bauen gern langfristige Beziehungen auf.",
                    "Selbstständigkeit und Eigenmotivation treiben Sie an, Sie denken zielorientiert.",
                    "Sie versetzen sich in die Bedürfnisse Ihrer Kunden und handeln lösungsorientiert.",
                    "Erfahrung im Vertrieb oder in der Finanzwelt ist willkommen, aber kein Muss.",
                  ].map((text) => (
                    <li key={text} className="flex gap-3 text-sm text-ink-fg-muted">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-gold-soft" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
                  Das erwartet Sie
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Ein eingespieltes Team mit individueller Einarbeitung und laufender Weiterbildung.",
                    "Flexible Arbeitszeiten — Sie bestimmen selbst, in welchem Umfang Sie arbeiten.",
                    "Ein transparentes Vergütungsmodell mit überdurchschnittlichen Verdienstchancen.",
                    "Moderne Tools und Backoffice-Support, der Ihnen administrativen Aufwand abnimmt.",
                    "Langfristige Aufstiegsperspektiven in einem wachsenden Team.",
                  ].map((text) => (
                    <li key={text} className="flex gap-3 text-sm text-ink-fg-muted">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-gold-soft" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-ink/8 pt-8">
              <p className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
                Ihre Aufgaben
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {[
                  "Vertrieb unserer Finanz- und Versicherungslösungen.",
                  "Analyse individueller Kundenbedürfnisse und passgenaue Angebote.",
                  "Persönliche und digitale Betreuung Ihrer Kunden.",
                  "Mitgestaltung unseres Teams im Ruhrgebiet.",
                ].map((text) => (
                  <li key={text} className="flex gap-3 text-sm text-ink-fg-muted">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-gold-soft" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-ink-fg-muted">
              Standorte: Gelsenkirchen, Bochum, Essen, Oberhausen, Recklinghausen, Bottrop und
              Dortmund.
            </p>

            <a
              href={`mailto:${site.email}?subject=Bewerbung Vertriebsmitarbeiter`}
              className="btn-primary mt-9 inline-flex min-h-12 items-center px-6 text-sm font-medium"
            >
              Jetzt bewerben
            </a>
            <p className="mt-5 font-mono text-xs text-ink-fg-muted">{site.email}</p>
          </div>

          <p className="mt-8 max-w-2xl text-sm text-ink-fg-muted">
            Nicht die passende Stelle dabei? Wir schauen uns auch Initiativbewerbungen an —
            besonders von Menschen, die im Ruhrgebiet zu Hause sind und Beratung als Handwerk
            verstehen.
          </p>
        </div>
      </section>
    </>
  );
}
