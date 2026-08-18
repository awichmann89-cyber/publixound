"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { gallery } from "@/lib/site";

export default function Galerie() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <section
      id="referenzen"
      className="scroll-mt-24 border-t border-line bg-ink py-24 md:py-32"
    >
      <div className="container-px">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Referenzen</p>
            <h2 className="headline mt-6 text-[clamp(2.25rem,5vw,3.75rem)]">
              Ein Ausschnitt aus unserer Arbeit.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-fog">
            Stadtfeste, Konzerte, Gottesdienste, Firmenveranstaltungen und
            Industriedenkmäler – jedes Projekt bekommt sein eigenes Konzept.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden rounded-2xl border border-line focus-visible:border-brand ${
                i === 0 || i === 5 ? "col-span-2 aspect-16/10" : "aspect-square"
              }`}
              aria-label={`Bild vergrößern: ${g.alt}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
              />
              <span
                className="absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bildergalerie"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative h-full max-h-[82vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[index].src}
              alt={gallery[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="pointer-events-none absolute bottom-6 left-1/2 max-w-xl -translate-x-1/2 px-4 text-center text-sm text-fog">
            {gallery[index].alt}
          </p>

          <button
            type="button"
            onClick={close}
            aria-label="Schließen"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-line text-chalk transition-colors hover:border-brand"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-chalk transition-colors hover:border-brand md:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Nächstes Bild"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ink/70 text-chalk transition-colors hover:border-brand md:right-6"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
