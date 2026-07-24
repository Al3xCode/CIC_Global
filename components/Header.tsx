"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="CIC-Global, zur Startseite"
          className="-ml-1 flex min-h-11 items-center px-1"
        >
          <Logo />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center text-sm transition-colors hover:text-fg ${
                  active ? "text-gold" : "text-fg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="flex min-h-11 items-center border border-gold px-4 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Erstgespräch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-fg md:hidden"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/8 bg-ink md:hidden">
          <nav aria-label="Hauptnavigation mobil" className="mx-auto max-w-6xl px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-12 items-center border-b border-white/6 text-base text-fg last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-4 flex min-h-12 items-center justify-center border border-gold text-base text-gold"
            >
              Erstgespräch vereinbaren
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
