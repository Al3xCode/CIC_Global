import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/Counter";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Über uns",
  description:
    "CIC-Global aus Gelsenkirchen: Wir analysieren, optimieren und verbessern finanzielle Prozesse. Im Mittelpunkt steht messbarer Nutzen statt Produktvermittlung.",
  path: "/ueber-uns",
});

export default function UeberUns() {
  return (
    <>
      <section className="border-b border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Über CIC-Global</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] sm:text-2xl lg:text-3xl">
            Wer wir sind. Woher wir stammen. Wofür wir stehen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted">
            Wir analysieren, optimieren und verbessern finanzielle Prozesse für unsere Kunden. Im
            Mittelpunkt steht dabei immer eines: messbarer Nutzen und nachhaltige Entlastung.
          </p>
        </div>
      </section>

      <section className="bg-paper text-ink-fg">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-24">
          <div className="relative aspect-[4/3] w-full lg:sticky lg:top-24">
            <Image
              src="/img/design-ohne-titel-8.png"
              alt={`${site.founder} bei der Arbeit im Büro in ${site.city}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl lg:text-2xl">Überzeugen durch Ergebnisse.</h2>
            <div className="prose-cic mt-6 text-ink-fg-muted">
              <p>
                Strukturiert. Zielgerichtet. Lösungsorientiert. Wir verstehen Finanzberatung nicht
                als Standardlösung, sondern als individuellen Prozess, der sich an den echten
                Bedürfnissen unserer Kunden orientiert. Jede finanzielle Situation ist anders —
                genau deshalb setzen wir auf persönliche Analyse statt pauschale Ansätze.
              </p>
              <p>
                Unser Ziel ist es nicht, Produkte zu vermitteln, sondern nachhaltige Verbesserungen
                für unsere Kunden zu schaffen. Dabei arbeiten wir mit ausgewählten Partnern und
                starken Lösungen, um sowohl Privatpersonen als auch Unternehmen bestmöglich zu
                unterstützen.
              </p>
              <p>
                Vertrauen ist die Grundlage jeder erfolgreichen Zusammenarbeit. Wir setzen auf
                Transparenz, Ehrlichkeit und langfristige Partnerschaften — damit finanzielle
                Entscheidungen sicher und langfristig erfolgreich getroffen werden können.
              </p>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink-fg/15 pt-6">
              <div>
                <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
                  Zufriedene Kunden
                </dt>
                <dd className="mt-1 font-display text-xl">
                  <Counter to={150} suffix="+" />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
                  Vertriebspartner
                </dt>
                <dd className="mt-1 font-display text-xl">
                  <Counter to={15} />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-xl lg:text-2xl">Lernen Sie uns kennen.</h2>
            <p className="mt-5 text-fg-muted">
              Unser Büro liegt an der {site.street} in {site.city}. Kommen Sie vorbei oder
              vereinbaren Sie vorab einen Termin.
            </p>
            <Link
              href="/kontakt"
              className="mt-9 inline-flex min-h-12 items-center bg-gold px-6 text-sm font-medium text-ink transition-colors hover:bg-gold-bright"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
