import { Counter } from "@/components/Counter";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Karriere",
  description:
    "Karriere bei CIC-Global in Gelsenkirchen: Werde Teil eines Teams aus 15 Vertriebspartnern und arbeite mit über 150 Kunden an ihrer finanziellen Zukunft.",
  path: "/karriere",
});

export default function Karriere() {
  return (
    <>
      <section className="border-b border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Karriere</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] sm:text-2xl lg:text-3xl">
            Arbeite an etwas, das Menschen dreißig Jahre lang trägt.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted">
            Werde Teil von {site.name} und profitiere von attraktiven Benefits, flexiblen
            Arbeitszeiten und einem Team, das sich gegenseitig weiterbringt.
          </p>

          <dl className="mt-14 flex flex-wrap gap-x-14 gap-y-8 border-t border-white/8 pt-8">
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-fg-muted">
                Vertriebspartner
              </dt>
              <dd className="mt-2 font-display text-2xl text-gold">
                <Counter to={15} />
              </dd>
            </div>
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-fg-muted">
                Zufriedene Kunden
              </dt>
              <dd className="mt-2 font-display text-2xl text-gold">
                <Counter to={150} suffix="+" />
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <h2 className="text-xl lg:text-2xl">Offene Stellen</h2>

          {/* Ehrlicher Leerzustand statt einer Liste, die es noch nicht gibt */}
          <div className="mt-8 max-w-2xl border border-white/12 p-8 sm:p-10">
            <p className="text-fg-muted">
              Aktuell ist keine Stelle ausgeschrieben. Wir schauen uns Initiativbewerbungen trotzdem
              an — besonders von Menschen, die im Ruhrgebiet zu Hause sind und Beratung als Handwerk
              verstehen.
            </p>
            <a
              href={`mailto:${site.email}?subject=Initiativbewerbung`}
              className="mt-8 inline-flex min-h-12 items-center bg-gold px-6 text-sm font-medium text-ink transition-colors hover:bg-gold-bright"
            >
              Initiativ bewerben
            </a>
            <p className="mt-5 font-mono text-xs text-fg-muted">{site.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}
