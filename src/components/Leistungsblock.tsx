import Image from "next/image";
import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  steps: { k: string; v: string }[];
  img: string;
  alt: string;
  flip?: boolean;
  tone?: "ink" | "soft";
};

export default function Leistungsblock({
  id,
  eyebrow,
  title,
  paragraphs,
  steps,
  img,
  alt,
  flip = false,
  tone = "ink",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-24 md:py-32 ${
        tone === "soft" ? "bg-ink-soft" : "bg-ink"
      }`}
    >
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className={flip ? "lg:order-2" : undefined}>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="headline mt-6 text-[clamp(2.25rem,5vw,3.75rem)]">{title}</h2>
            <div className="prose-px mt-7 space-y-5 text-base md:text-lg">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <ol className="mt-10 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {steps.map((s, i) => (
                <li key={s.k} className="flex gap-5 bg-ink-soft p-5 md:p-6">
                  <span className="font-display text-sm font-bold tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold tracking-tight text-chalk">
                      {s.k}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-fog">{s.v}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120} className={flip ? "lg:order-1" : undefined}>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-line">
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
