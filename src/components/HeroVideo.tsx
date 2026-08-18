"use client";

import { useEffect, useRef } from "react";

/**
 * Hintergrundvideo des Hero-Bereichs.
 *
 * Die Auflösung wählt der Browser selbst über `media` am <source>. Vorher hat
 * JavaScript die Quelle nachträglich getauscht – dadurch lud der Desktop erst
 * die 720p-Datei an und verwarf sie mitten in der Wiedergabe wieder. Die
 * Auswahl passiert wie bei <video> üblich einmalig beim Laden, ein späterer
 * Resize über die 1024px-Grenze wechselt die Datei also nicht.
 *
 * Den Autostart übernehmen die HTML-Attribute. Der Effekt ist nur die
 * Absicherung: `muted` zusätzlich als Property (nur dann greift die
 * Muted-Autoplay-Ausnahme sicher), plus ein erneuter Versuch, wenn der Tab
 * wieder sichtbar wird oder Daten nachgeladen sind.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      // Systemeinstellung „Bewegung reduzieren“ – dann bleibt das Standbild stehen.
      if (reducedMotion.matches) {
        video.pause();
        return;
      }
      if (!video.paused || document.visibilityState !== "visible") return;

      video.play().catch((error: unknown) => {
        if (process.env.NODE_ENV !== "production") {
          console.warn("[HeroVideo] Autostart vom Browser abgelehnt:", error);
        }
      });
    };

    sync();

    reducedMotion.addEventListener("change", sync);
    video.addEventListener("canplay", sync);
    document.addEventListener("visibilitychange", sync);

    return () => {
      reducedMotion.removeEventListener("change", sync);
      video.removeEventListener("canplay", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      poster="/media/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/media/hero-1080.mp4" media="(min-width: 1024px)" type="video/mp4" />
      <source src="/media/hero-720.mp4" type="video/mp4" />
    </video>
  );
}
