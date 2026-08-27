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
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Leistungen</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] sm:text-2xl lg:text-3xl">Für jeden maßgeschneidert.</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-fg-muted">
            Fünf Bereiche, ein Plan. Wir ordnen sie nicht nach Produktkategorie, sondern danach,
            wann sie bei Ihnen ankommen.
          </p>

          <div className="mt-14 lg:mt-20">
            <Timeline services={services} />
          </div>
        </div>
      </section>

      {/* ---------- Exklusivpartner ---------- */}
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Exklusivpartner</p>
            <h2 className="mt-5 text-xl lg:text-2xl">Starke Partner im Rücken.</h2>
            <p className="mt-5 text-ink-fg-muted">
              Wir arbeiten mit einem sorgfältig ausgewählten Netzwerk renommierter
              Versicherungs-, Rechtsschutz- und Energiedienstleister. Das gibt Ihnen Zugang zu
              leistungsstarken Produkten statt zu einem einzelnen Anbieter.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {partners.map((p) => (
              <div key={p.name} className="border border-ink/12 p-8">
                <p className="font-display text-lg">{p.name}</p>
                <p className="mt-2 font-mono text-2xs uppercase tracking-[0.18em] text-gold">
                  {p.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ersparnis-Aussage — als Zahl gesetzt, nicht als Kachel */}
      <section className="border-b border-ink/8 bg-sand-2">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <p className="tnum font-display text-3xl text-gold">10.500 €</p>
          <div>
            <p className="max-w-xl text-lg">
              sparen Unternehmer mit uns im Schnitt pro Jahr — bei gleichzeitig besserem
              Versicherungsschutz.
            </p>
            <p className="mt-3 max-w-xl text-sm text-ink-fg-muted">
              Dank einer strategischen Finanzoptimierung profitieren Sie von einem deutlich besseren
              Preis-Leistungs-Verhältnis: mehr Leistungen und umfangreicherer Service zu
              attraktiveren Konditionen.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-xl lg:text-2xl">Wo stehen Sie gerade?</h2>
            <p className="mt-5 text-ink-fg-muted">
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
