"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line/80 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`container-px flex items-center justify-between gap-6 transition-all duration-500 ${
          scrolled || open ? "h-20 md:h-24" : "h-24 md:h-32"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${site.name} – Startseite`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-publixound.png"
            alt={site.name}
            width={473}
            height={440}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled || open ? "h-14 md:h-16" : "h-16 md:h-24"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap text-[0.78rem] font-medium tracking-wide text-fog transition-colors hover:text-chalk"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden whitespace-nowrap text-sm font-medium text-fog transition-colors hover:text-chalk 2xl:block"
          >
            {site.phone}
          </a>
          <Link
            href="/#kontakt"
            className="hidden whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-bright sm:inline-block"
          >
            Anfrage stellen
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-chalk transition-colors hover:border-brand xl:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-ink/95 backdrop-blur-xl xl:hidden"
      >
        <nav className="container-px flex flex-col py-4" aria-label="Mobile Navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-4 font-display text-lg font-semibold tracking-tight text-chalk last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 flex flex-col gap-3 pb-4">
            <a
              href={`tel:${site.phoneHref}`}
              className="rounded-full border border-line px-5 py-3 text-center text-sm font-semibold text-chalk"
            >
              {site.phone}
            </a>
            <Link
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Anfrage stellen
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
