"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

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
          className="-ml-1 flex min-h-11 items-center px-1 transition-opacity hover:opacity-80"
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
                className={`relative flex min-h-11 items-center text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-out hover:text-fg hover:after:scale-x-100 ${
                  active ? "text-gold after:scale-x-100" : "text-fg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="btn-secondary flex min-h-11 items-center px-4 text-sm"
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
          <span className="relative flex h-6 w-6 items-center justify-center">
            <Menu
              size={22}
              strokeWidth={1.5}
              aria-hidden
              className={`absolute transition-all duration-200 ${
                open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={22}
              strokeWidth={1.5}
              aria-hidden
              className={`absolute transition-all duration-200 ${
                open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/8 bg-ink md:hidden"
          >
            <nav aria-label="Hauptnavigation mobil" className="mx-auto max-w-6xl px-5 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-12 items-center border-b border-white/6 text-base text-fg transition-colors last:border-0 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="btn-secondary mt-4 flex min-h-12 items-center justify-center text-base"
              >
                Erstgespräch vereinbaren
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
