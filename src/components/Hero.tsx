import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section id="start" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <HeroVideo />
      </div>

      {/* Grundabdunklung über dem gesamten Video */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,8,10,0.72)_0%,rgba(8,8,10,0.45)_45%,rgba(8,8,10,0.9)_100%)]"
        aria-hidden="true"
      />
      {/* Zusätzlicher Scrim hinter der Headline, damit sie frei steht */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(75%_65%_at_22%_50%,rgba(8,8,10,0.88)_0%,rgba(8,8,10,0.55)_45%,transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-ink to-transparent"
        aria-hidden="true"
      />

      <div className="container-px relative flex min-h-[100svh] flex-col justify-center pb-28 pt-32 md:pb-32">
        <div className="max-w-[56rem]">
          <p className="eyebrow">Veranstaltungstechnik aus Essen</p>

          <h1 className="headline mt-8 text-[clamp(2.75rem,8.4vw,6.5rem)] text-white drop-shadow-[0_2px_40px_rgba(0,0,0,0.65)]">
            Zusammen gestalten,
            <br />
            <span className="text-brand">was andere fasziniert.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            Ton, Licht, Video, Planung und Kommunikation – alles aus einer Hand.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
            >
              Projekt anfragen
            </a>
            <a
              href="#veranstaltungstechnik"
              className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>

      <a
        href="#uberuns"
        aria-label="Zum nächsten Abschnitt scrollen"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-white/45 transition-colors hover:text-white md:flex"
      >
        Scrollen
        <span className="block h-10 w-px bg-linear-to-b from-white/60 to-transparent" />
      </a>
    </section>
  );
}
