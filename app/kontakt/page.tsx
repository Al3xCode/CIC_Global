import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kontakt",
  description: `CIC-Global in ${site.city}: ${site.street}, Telefon ${site.phone}. Schreiben Sie uns oder vereinbaren Sie ein kostenloses Erstgespräch.`,
  path: "/kontakt",
});

const mapsQuery = encodeURIComponent(
  `${site.street}, ${site.postalCode} ${site.city}`
);

export default function Kontakt() {
  return (
    <>
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="eyebrow">Kontakt</p>
          <h1 className="mt-5 max-w-2xl text-[2rem] sm:text-2xl lg:text-3xl">Sprechen wir darüber.</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-fg-muted">
            Das Erstgespräch ist kostenlos und unverbindlich. Sie erreichen uns telefonisch, per
            E-Mail oder über das Formular.
          </p>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div>
              <h2 className="eyebrow">Nachricht schreiben</h2>
              <div className="relative mt-6">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:pt-0">
              <h2 className="eyebrow">Direkt erreichen</h2>
              <div className="mt-6 flex flex-col gap-1 font-mono text-sm">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="tnum flex min-h-11 items-center text-ink-fg transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-11 items-center text-ink-fg transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </div>

              <h2 className="eyebrow mt-10">Standort</h2>
              <address className="mt-6 font-mono text-sm not-italic leading-relaxed text-ink-fg-muted">
                {site.street}
                <br />
                {site.postalCode} {site.city}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex min-h-11 items-center text-sm text-gold underline underline-offset-4"
              >
                Route planen
              </a>

              <h2 className="eyebrow mt-10">Öffnungszeiten</h2>
              <dl className="mt-6 font-mono text-sm text-ink-fg-muted">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex gap-4 py-0.5">
                    <dt className="w-16 shrink-0 text-ink-fg">{h.days}</dt>
                    <dd className="tnum">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- Direkt online buchen ---------- */}
      <section className="border-b border-ink/8">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Terminbuchung</p>
            <h2 className="mt-5 text-xl lg:text-2xl">Lieber gleich einen Termin fixieren?</h2>
            <p className="mt-5 text-ink-fg-muted">
              Wählen Sie direkt einen freien Slot in unserem Kalender — ganz ohne Hin- und
              Herschreiben.
            </p>
          </div>

          <div className="mt-10">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      {/* ---------- Standort ---------- */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Standort</p>
            <h2 className="mt-5 text-xl lg:text-2xl">Unser Standort in Gelsenkirchen.</h2>
            <p className="mt-5 text-ink-fg-muted">
              {site.street}, {site.postalCode} {site.city} — mitten in der Stadt, gut zu
              erreichen.
            </p>
          </div>

          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
