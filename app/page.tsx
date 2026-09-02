import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Counter } from "@/components/Counter";
import { FAQ } from "@/components/FAQ";
import { HeroLines } from "@/components/HeroLines";
import { Timeline } from "@/components/Timeline";
import { faqJsonLd } from "@/lib/seo";
import { articles, faqs, formatDate, partners, services, site } from "@/lib/site";

const exploreCards = [
  {
    title: "Leistungen",
    body: "Mit der richtigen Finanzoptimierung mehr Leistung für bessere Konditionen.",
    href: "/leistungen",
    cta: "Leistungen ansehen",
    img: "/img/card-leistungen.webp",
    alt: "Finanzanalyse auf Laptop und Smartphone",
    fit: "cover" as const,
  },
  {
    title: "Über uns",
    body: "Wer wir sind. Woher wir stammen. Wofür wir stehen.",
    href: "/ueber-uns",
    cta: "Über uns",
    img: "/img/logo-cic-global.webp",
    alt: `${site.name} Logo`,
    fit: "contain" as const,
  },
  {
    title: "Karriere",
    body: "Werden Sie Teil von CIC-Global und profitieren Sie von attraktiven Benefits.",
    href: "/karriere",
    cta: "Stellenangebote",
    img: "/img/card-karriere.webp",
    alt: "Gepflegtes Auftreten im Vertrieb",
    fit: "cover" as const,
  },
];

export default function Home() {
  const latest = articles.slice(0, 3);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden border-b border-ink/8">
        {/* Sehr leise Vignette — keine Fläche, nur Tiefe hinter dem Text */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 30rem at 8% 0%, rgba(23,20,15,0.07), transparent 60%)",
          }}
        />
        <HeroLines />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-24">
          {/* min-w-0: sonst zieht die (durch &nbsp; unumbrechbare) Überschrift
              die erste Spalte über ihren fr-Anteil hinaus breit und drückt das
              Bild klein. */}
          <div className="min-w-0">
            <p className="eyebrow flex items-center gap-2">
              <span aria-hidden className="h-px w-6 bg-gold" />
              Finanzberatung · {site.city}
            </p>
            <h1 className="mt-6 text-[2.25rem] font-medium leading-[1.05] sm:text-3xl lg:text-[3.375rem]">
              Finanzielle Sicherheit beginnt mit der{" "}
              <em className="text-gold not-italic">richtigen</em> Beratung.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-ink-fg-muted">
              Jede finanzielle Situation ist anders. Wir sehen uns Ihre an — und bauen daraus einen
              Plan, der heute wirkt und in dreißig Jahren noch trägt.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link
                href="/kontakt"
                className="btn-primary inline-flex min-h-14 items-center px-8 text-base font-medium"
              >
                Kostenloses Erstgespräch
              </Link>
              <Link
                href="/leistungen"
                className="group inline-flex min-h-12 items-center gap-2 text-sm text-ink-fg-muted transition-colors hover:text-ink-fg"
              >
                Leistungen ansehen
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>

          </div>

          <figure className="m-0 mt-4 lg:mt-0">
            <div className="relative">
              {/* Versetzter Gold-Rahmen hinter dem Bild — gibt ihm Gewicht,
                  ohne eine Fläche zu füllen. Folgt demselben Seitenverhältnis
                  wie das Bild, damit der Versatz überall gleich breit bleibt. */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 hidden aspect-[4/3] w-full border border-gold/50 sm:block sm:aspect-[16/9] lg:aspect-[4/3]"
              />
              {/* 16:9 nur dort, wo das Bild über die volle Breite läuft. In der
                  schmaleren rechten Spalte wäre es ein flacher Streifen —
                  deshalb ab lg wieder 4:3, das füllt die Spaltenhöhe neben
                  dem Text. */}
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src="/img/portrait-hero-wide.webp"
                  alt={`${site.founder}, Gründer von ${site.name}, am Schreibtisch`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <figcaption className="mt-4 font-mono text-2xs uppercase tracking-[0.18em] text-ink-fg-muted">
              {site.founder}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Zeitachse: das Signature-Element ---------- */}
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Was wann wirkt</p>
            <h2 className="mt-5 text-xl lg:text-2xl">
              Geld arbeitet in unterschiedlichen Zeiträumen.
            </h2>
            <p className="mt-5 text-ink-fg-muted">
              Manches senkt schon den nächsten Abschlag, anderes zahlt sich erst in dreißig Jahren
              aus. Wir sortieren beides — damit Sie wissen, was zuerst dran ist.
            </p>
          </div>

          <div className="mt-14 lg:mt-20">
            <Timeline services={services} />
          </div>
        </div>
      </section>

      {/* ---------- Dunkler Einschub: der Mensch dahinter ----------
          War früher der einzige helle Bruch auf sonst dunkler Seite. Jetzt,
          wo die Seite grundsätzlich hell ist, kehrt sich das um — dieser
          Abschnitt ist der seltene dunkle Bruch, behält aber dieselbe Idee:
          ein Abschnitt sticht bewusst ab. */}
      <section className="bg-ink text-fg">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/img/portrait-buero.webp"
              alt={`${site.founder} bei der Arbeit im Büro in ${site.city}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Über CIC-Global</p>
            <h2 className="mt-5 text-xl lg:text-2xl">Überzeugen durch Ergebnisse.</h2>
            <div className="prose-cic mt-6 text-fg-muted">
              <p>
                Strukturiert. Zielgerichtet. Lösungsorientiert. Wir verstehen Finanzberatung nicht
                als Standardlösung, sondern als individuellen Prozess, der sich an den echten
                Bedürfnissen unserer Kunden orientiert.
              </p>
              <p>
                Unser Ziel ist es nicht, Produkte zu vermitteln, sondern nachhaltige Verbesserungen
                zu schaffen. Im Mittelpunkt steht immer eines: echte Optimierung statt reiner
                Beratung.
              </p>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/15 pt-6">
              <div>
                <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-fg-muted">
                  Zufriedene Kunden
                </dt>
                <dd className="mt-1 font-display text-xl">
                  <Counter to={386} suffix="+" />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-fg-muted">
                  Vertriebspartner
                </dt>
                <dd className="mt-1 font-display text-xl">
                  <Counter to={15} />
                </dd>
              </div>
            </dl>

            <Link
              href="/ueber-uns"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-fg transition-colors hover:text-gold"
            >
              Wer wir sind
              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Erfahren Sie mehr über CIC-Global ---------- */}
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Entdecken</p>
            <h2 className="mt-5 text-xl lg:text-2xl">Erfahren Sie mehr über CIC-Global.</h2>
            <p className="mt-5 text-ink-fg-muted">
              Von Null bis hin zu einer finanziell abgesicherten Zukunft.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {exploreCards.map((card) => (
              <div key={card.title} className="flex flex-col border border-ink/12">
                <div
                  className={`relative aspect-[4/3] w-full ${card.fit === "contain" ? "bg-paper" : ""}`}
                >
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className={card.fit === "contain" ? "object-contain p-10" : "object-cover"}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg">{card.title}</h3>
                  <p className="mt-2 text-sm text-ink-fg-muted">{card.body}</p>
                  <Link
                    href={card.href}
                    className="btn-secondary mt-6 inline-flex min-h-11 items-center self-start px-5 text-sm"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Partner: leise, als Zeile statt als Logo-Wand ---------- */}
      <section className="border-b border-ink/8 bg-sand-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:px-8 md:flex-row md:items-baseline md:gap-10">
          <p className="eyebrow shrink-0">Im Netzwerk</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-fg-muted">
            {partners.map((p) => (
              <li key={p.name}>{p.name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Blog: redaktionelle Liste, keine Kacheln ---------- */}
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="eyebrow">Aus dem Blog</p>
              <h2 className="mt-5 text-xl lg:text-2xl">Finanzen verstehen.</h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex min-h-11 items-center gap-2 text-sm text-ink-fg-muted transition-colors hover:text-gold"
            >
              Alle Beiträge
              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <ul className="mt-10 border-t border-ink/8">
            {latest.map((a) => (
              <li key={a.slug} className="border-b border-ink/8">
                <Link
                  href={`/blog/${a.slug}`}
                  className="group relative grid gap-1 py-6 pr-0 transition-colors sm:grid-cols-[9rem_1fr] sm:gap-6 sm:pr-8 sm:hover:bg-ink/[0.03]"
                >
                  <time
                    dateTime={a.date}
                    className="tnum font-mono text-2xs uppercase tracking-[0.14em] text-ink-fg-muted sm:pt-1.5"
                  >
                    {formatDate(a.date)}
                  </time>
                  <span>
                    <span className="font-display text-lg transition-colors group-hover:text-gold">
                      {a.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink-fg-muted">{a.lead}</span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    size={16}
                    strokeWidth={1.5}
                    className="absolute right-2 top-1/2 hidden -translate-y-1/2 translate-x-2 text-gold opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Häufige Fragen ---------- */}
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Häufige Fragen</p>
            <h2 className="mt-5 text-xl lg:text-2xl">Bevor Sie schreiben.</h2>
            <p className="mt-5 text-ink-fg-muted">
              Was uns am häufigsten gefragt wird — kurz beantwortet, ohne Umwege.
            </p>
          </div>

          <FAQ items={faqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      </section>

      {/* ---------- Abschluss-CTA ---------- */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-xl lg:text-2xl">
              Ganz gleich, welche Lebenssituation — es gibt eine Lösung, die passt.
            </h2>
            <p className="mt-5 text-ink-fg-muted">
              Das erste Gespräch kostet nichts und verpflichtet zu nichts. Danach wissen Sie, wo Sie
              stehen.
            </p>
            <Link
              href="/kontakt"
              className="btn-primary mt-9 inline-flex min-h-12 items-center px-6 text-sm font-medium"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
