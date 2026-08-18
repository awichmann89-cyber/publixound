import Reveal from "./Reveal";

const pillars = [
  {
    href: "#veranstaltungstechnik",
    n: "01",
    title: "Veranstaltungstechnik",
    text: "Ton, Licht und Video – geplant, aufgebaut, gefahren.",
  },
  {
    href: "#veranstaltungsplanung",
    n: "02",
    title: "Veranstaltungsplanung",
    text: "Von der ersten Idee bis zur letzten Kiste im LKW.",
  },
  {
    href: "#kommunikation",
    n: "03",
    title: "Kommunikation & Werbung",
    text: "Inhalte, die ankommen – kreativ und stressfrei umgesetzt.",
  },
];

export default function Saeulen() {
  return (
    <section
      className="relative z-10 -mt-16 pb-24 md:-mt-24 md:pb-28"
      aria-label="Unsere drei Leistungsbereiche"
    >
      <div className="container-px">
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {pillars.map((p, i) => (
            <li key={p.href} className="bg-ink-soft">
              <Reveal delay={i * 90}>
                <a
                  href={p.href}
                  className="group flex h-full flex-col gap-3 p-7 transition-colors hover:bg-surface md:p-9"
                >
                  <span className="font-display text-xs font-bold tracking-[0.22em] text-brand">
                    {p.n}
                  </span>
                  <span className="font-display text-xl font-bold tracking-tight text-chalk md:text-2xl">
                    {p.title}
                  </span>
                  <span className="text-sm leading-relaxed text-fog">{p.text}</span>
                  <span className="mt-auto pt-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-fog/70 transition-colors group-hover:text-brand">
                    Mehr erfahren →
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
