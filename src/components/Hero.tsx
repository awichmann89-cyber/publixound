"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    href: "#veranstaltungstechnik",
    n: "01",
    title: "Veranstaltungs­technik",
    text: "Ton, Licht und Video – geplant, aufgebaut, gefahren.",
  },
  {
    href: "#veranstaltungsplanung",
    n: "02",
    title: "Veranstaltungs­planung",
    text: "Von der ersten Idee bis zur letzten Kiste im LKW.",
  },
  {
    href: "#kommunikation",
    n: "03",
    title: "Kommunikation & Werbung",
    text: "Inhalte, die ankommen – kreativ und stressfrei umgesetzt.",
  },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      v.pause();
      return;
    }
    void v.play().catch(() => {
      /* Autoplay kann vom Browser blockiert werden – Poster bleibt sichtbar. */
    });
  }, []);

  return (
    <section id="start" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/media/hero-1080.mp4" type="video/mp4" media="(min-width: 1024px)" />
          <source src="/media/hero-720.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,8,10,0.86)_0%,rgba(8,8,10,0.55)_38%,rgba(8,8,10,0.82)_78%,#08080a_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_35%,rgba(8,8,10,0.75)_100%)]"
        aria-hidden="true"
      />

      <div className="container-px relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:justify-center md:pb-32 md:pt-36">
        <div className="max-w-4xl">
          <p className="eyebrow">Veranstaltungstechnik aus Oberhausen</p>

          <h1 className="headline mt-6 text-[clamp(2.5rem,7.5vw,5.5rem)] text-white">
            Zusammen gestalten,
            <br />
            <span className="text-brand">was andere fasziniert.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Ton, Licht, Video, Planung und Kommunikation – alles aus einer Hand.
            Vom gemieteten Lautsprecher bis zum Rundum-sorglos-Paket für Ihre
            Veranstaltung im Ruhrgebiet und weit darüber hinaus.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
            >
              Projekt anfragen
            </a>
            <a
              href="#veranstaltungstechnik"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:mt-20 md:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.href} className="bg-ink/70 backdrop-blur-md">
              <a
                href={p.href}
                className="group flex h-full flex-col gap-2 p-6 transition-colors hover:bg-ink/40 md:p-7"
              >
                <span className="font-display text-xs font-bold tracking-[0.2em] text-brand">
                  {p.n}
                </span>
                <span className="font-display text-lg font-bold tracking-tight text-white md:text-xl">
                  {p.title}
                </span>
                <span className="text-sm leading-relaxed text-fog">{p.text}</span>
                <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors group-hover:text-brand">
                  Mehr erfahren →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
