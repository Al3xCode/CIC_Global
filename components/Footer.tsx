import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-fg-muted">
              Finanz- und Versicherungsberatung in {site.city}.
            </p>
          </div>

          <div>
            <h2 className="eyebrow">Standort</h2>
            <address className="mt-4 font-mono text-sm not-italic leading-relaxed text-fg-muted">
              {site.street}
              <br />
              {site.postalCode} {site.city}
            </address>
          </div>

          <div>
            <h2 className="eyebrow">Kontakt</h2>
            <div className="mt-2 flex flex-col font-mono text-sm text-fg-muted">
              <a
                href={`tel:${site.phoneHref}`}
                className="tnum flex min-h-11 items-center transition-colors hover:text-gold"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </div>
            <h2 className="eyebrow mt-6">Öffnungszeiten</h2>
            <dl className="mt-4 font-mono text-sm text-fg-muted">
              {site.hours.map((h) => (
                <div key={h.days} className="flex gap-3">
                  <dt className="w-16 shrink-0">{h.days}</dt>
                  <dd className="tnum">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="Footer-Navigation">
            <h2 className="eyebrow">Seiten</h2>
            <ul className="mt-2 flex flex-col text-sm">
              {[...nav, { href: "/newsletter", label: "Newsletter" }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center text-fg-muted transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="tnum">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="flex min-h-11 items-center transition-colors hover:text-gold"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="flex min-h-11 items-center transition-colors hover:text-gold"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
