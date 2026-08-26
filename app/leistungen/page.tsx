import Link from "next/link";
import { Timeline } from "@/components/Timeline";
import { pageMeta } from "@/lib/seo";
import { partners, services } from "@/lib/site";

export const metadata = pageMeta({
  title: "Leistungen",
  description:
    "Finanzanalyse, Strom & Gas, Versicherungen, Investments und Altersvorsorge — sortiert danach, ab wann sie wirken. CIC-Global aus Gelsenkirchen.",
  path: "/leistungen",
});

export default function Leistungen() {
  return (
    <>
      <section className="border-b border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Leistungen</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] sm:text-2xl lg:text-3xl">Für jeden maßgeschneidert.</h1>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted">
            Fünf Bereiche, ein Plan. Wir ordnen sie nicht nach Produktkategorie, sondern danach,
            wann sie bei Ihnen ankommen.
          </p>

          <div className="mt-14 lg:mt-20">
            <Timeline services={services} />
          </div>
        </div>
      </section>

      {/* Ersparnis-Aussage — als Zahl gesetzt, nicht als Kachel */}
      <section className="border-b border-white/8 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <p className="tnum font-display text-3xl text-gold">10.500 €</p>
          <div>
            <p className="max-w-xl text-lg">
              sparen Unternehmer mit uns im Schnitt pro Jahr — bei gleichzeitig besserem
              Versicherungsschutz.
            </p>
            <p className="mt-3 max-w-xl text-sm text-fg-muted">
              Dank einer strategischen Finanzoptimierung profitieren Sie von einem deutlich besseren
              Preis-Leistungs-Verhältnis: mehr Leistungen und umfangreicherer Service zu
              attraktiveren Konditionen.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Im Netzwerk</p>
            <h2 className="mt-5 text-xl lg:text-2xl">Hinter jeder Beratung stehen starke Partner.</h2>
            <p className="mt-5 text-fg-muted">
              Wir arbeiten mit einem sorgfältig ausgewählten Netzwerk renommierter Versicherungs-,
              Finanzierungs- und Energiedienstleister. Diese langjährigen Kooperationen geben
              unseren Kunden Zugang zu leistungsstarken Produkten und einer breiten Auswahl an
              Möglichkeiten.
            </p>
          </div>

          <ul className="mt-10 border-t border-white/8">
            {partners.map((p) => (
              <li
                key={p}
                className="border-b border-white/8 py-5 font-mono text-sm tracking-wide text-fg-muted"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-xl lg:text-2xl">Wo stehen Sie gerade?</h2>
            <p className="mt-5 text-fg-muted">
              Die Finanzanalyse ist der Anfang. Sie kostet nichts und zeigt, welcher der fünf
              Bereiche bei Ihnen zuerst dran ist.
            </p>
            <Link
              href="/kontakt"
              className="btn-primary mt-9 inline-flex min-h-12 items-center px-6 text-sm font-medium"
            >
              Analyse anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
