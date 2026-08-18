"use client";

import { useEffect, useRef } from "react";

const SRC_LARGE = "/media/hero-1080.mp4";
const SRC_SMALL = "/media/hero-720.mp4";

/**
 * Hintergrundvideo des Hero-Bereichs.
 *
 * Wichtig: React gibt das `muted`-Attribut beim Server-Rendering nicht mit aus.
 * Ohne `muted` im HTML blockieren Desktop-Browser (Chrome, Safari, Edge) den
 * Autostart. Deshalb wird `muted` hier zusätzlich direkt am Element gesetzt,
 * bevor `play()` aufgerufen wird.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      return;
    }

    const large = window.matchMedia("(min-width: 1024px)").matches;
    const next = large ? SRC_LARGE : SRC_SMALL;

    if (!video.currentSrc.endsWith(next)) {
      video.src = next;
      video.load();
    }

    let cancelled = false;
    const tryPlay = () => {
      if (cancelled) return;
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          /* Von der Autoplay-Policy blockiert – der nächste Versuch folgt. */
        });
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", onVisibility);
    // Letzte Rettung: beim ersten Nutzerkontakt erneut versuchen.
    window.addEventListener("pointerdown", tryPlay, { once: true });
    window.addEventListener("keydown", tryPlay, { once: true });
    window.addEventListener("scroll", tryPlay, { once: true, passive: true });

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
      window.removeEventListener("scroll", tryPlay);
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
      preload="none"
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
    >
      {/* Fallback ohne JavaScript */}
      <source src={SRC_SMALL} type="video/mp4" />
    </video>
  );
}
