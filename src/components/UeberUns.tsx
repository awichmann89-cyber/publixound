import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const facts = [
  {
    k: "Standort",
    v: "Neue Mitte Oberhausen",
    d: "Lager und Werkstatt mitten im Ruhrgebiet – kurze Wege zu Ihrer Location.",
  },
  {
    k: "Leistungsumfang",
    v: "Miete bis Full-Service",
    d: "Nur Equipment, nur Personal oder das komplette Paket. Sie entscheiden.",
  },
  {
    k: "Arbeitsweise",
    v: "Individuelle Konzepte",
    d: "Wir beraten Sie und entwickeln aus Ihren Ideen ein tragfähiges Konzept.",
  },
];

export default function UeberUns() {
  return (
    <section
      id="uberuns"
      className="relative scroll-mt-24 border-t border-line bg-ink py-24 md:py-32"
    >
      {/* Alias-Anker, damit alte Links wie /#ueber-uns weiterhin funktionieren */}
      <span id="ueber-uns" className="absolute -top-24" aria-hidden="true" />

      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Über uns</p>
            <h2 className="headline mt-6 text-[clamp(2.25rem,5vw,3.75rem)]">
              Alles aus einer Hand.
            </h2>

            <div className="prose-px mt-8 space-y-5 text-base md:text-lg">
              <p>
                Wir freuen uns, Ihr Interesse geweckt zu haben. PubliXound ist ein
                Veranstaltungsdienstleister aus der Mitte des {site.region}s – unser
                Lager befindet sich in der neuen Mitte Oberhausens.
              </p>
              <p>
                Unser Service reicht von der einfachen Vermietung des Equipments bis
                hin zum Rundum-sorglos-Paket für Ihre Veranstaltung. Wir beraten Sie
                gerne und entwickeln individuelle Konzepte zu Ihren Ideen und
                Wünschen – ob Konferenz, Hauptversammlung, Stadtfest oder Open-Air.
              </p>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.k} className="bg-ink-soft p-6">
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                    {f.k}
                  </dt>
                  <dd className="mt-2 font-display text-base font-bold tracking-tight text-chalk">
                    {f.v}
                  </dd>
                  <dd className="mt-2 text-sm leading-relaxed text-fog">{f.d}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Unverbindlich beraten lassen
              </a>
              <a
                href="#referenzen"
                className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-chalk transition-colors hover:border-fog"
              >
                Referenzen ansehen
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-line">
              <Image
                src="/media/ueber-uns.jpg"
                alt="Techniker von PubliXound am Lichtpult während einer Open-Air-Veranstaltung"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/10 to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-ink-soft/95 px-6 py-5 backdrop-blur md:block">
              <p className="font-display text-3xl font-bold tracking-tight text-chalk">
                Ruhrgebiet
              </p>
              <p className="mt-1 text-sm text-fog">und überall dort, wo Sie uns brauchen.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
