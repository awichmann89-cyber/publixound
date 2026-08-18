import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="inhalt" className="bg-ink">
        <div className="container-px pb-24 pt-36 md:pb-32 md:pt-44">
          <div className="max-w-3xl">
            <p className="eyebrow">Rechtliches</p>
            <h1 className="headline mt-6 text-[clamp(2.25rem,5vw,3.5rem)]">{title}</h1>
            {intro && <p className="mt-6 text-base leading-relaxed text-fog">{intro}</p>}

            <div className="mt-12 space-y-10 text-sm leading-relaxed text-fog [&_a]:text-chalk [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-chalk [&_h3]:font-display [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-chalk [&_li]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
