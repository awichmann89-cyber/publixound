import Image from "next/image";
import Reveal from "./Reveal";

const disciplines = [
  {
    id: "tontechnik",
    n: "01",
    title: "Tontechnik",
    text: "Wir legen sehr viel Wert darauf, dass nicht nur jedes Detail zu verstehen ist, sondern auch der Klang überzeugt.",
    bullets: ["Beschallung für Innen & Außen", "Digitale Mischpulte & Monitoring", "Konferenz-, Sprach- & Livebeschallung"],
    img: "/media/tontechnik.jpg",
    alt: "Digitales Mischpult beim Einsatz in einer Kirche",
  },
  {
    id: "lichttechnik",
    n: "02",
    title: "Lichttechnik",
    text: "Mit dem passenden Licht wird die richtige Atmosphäre erzeugt. Faszination, Euphorie oder Geselligkeit sind nur ein Bruchteil der Emotionen, die Licht in uns hervorrufen kann.",
    bullets: ["Bühnen- & Effektlicht", "Architektur- und Ambiente-Beleuchtung", "Lichtdesign & Programmierung"],
    img: "/media/lichttechnik.jpg",
    alt: "Bühne mit farbigen Lichteffekten und Nebel bei Nacht",
  },
  {
    id: "videotechnik",
    n: "03",
    title: "Videotechnik",
    text: "Mit der passenden Videotechnik präsentieren wir Ihre Veranstaltung auf verschiedensten Streaming-Plattformen, damit sie nicht auf einen Ort beschränkt bleibt.",
    bullets: ["LED-Wände & Projektion", "Kamera & Bildregie", "Livestream auf allen gängigen Plattformen"],
    img: "/media/videotechnik.jpg",
    alt: "Kamera auf Stativ filmt eine Bühne mit farbiger Beleuchtung",
  },
];

export default function Veranstaltungstechnik() {
  return (
    <section
      id="veranstaltungstechnik"
      className="scroll-mt-24 border-t border-line bg-ink-soft py-24 md:py-32"
    >
      <div className="container-px">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Leistungen</p>
          <h2 className="headline mt-6 text-[clamp(2.25rem,5vw,3.75rem)]">
            Veranstaltungstechnik.
          </h2>
          <p className="prose-px mt-7 text-base md:text-lg">
            <span className="block text-fog">
              Ob Konferenzen, Hauptversammlungen, Open-Air-Konzerte oder Partys – wir
              finden mit Ihnen zusammen das passende Technik-Konzept. Mit unserem
              Know-how und unserer Manpower übernehmen wir die technische Planung, den
              Transport und Aufbau sowie die Bedienung der Anlagen im Betrieb. Falls
              Ihnen nur das passende Material fehlt, vermieten wir unsere Geräte auch
              gerne an Sie weiter.
            </span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.id} delay={i * 110}>
              <article
                id={d.id}
                className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-line bg-ink transition-colors hover:border-brand/60"
              >
                <div className="relative aspect-16/11 overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 font-display text-xs font-bold tracking-[0.22em] text-brand">
                    {d.n}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-chalk">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{d.text}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                    {d.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-chalk/85">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-ink p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight text-chalk md:text-2xl">
                Nur Material gesucht?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
                Wir vermieten unser Equipment auch ohne Personal – abholbereit in
                unserem Lager in Essen oder auf Wunsch angeliefert.
              </p>
            </div>
            <a
              href="#kontakt"
              className="shrink-0 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
            >
              Mietanfrage senden
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
