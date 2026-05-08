"use client";

import { useEffect, useRef } from "react";

export function HeroBackgroundVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.defaultMuted = true;

    const tryPlay = () => {
      void video.play().catch(() => {
        // Mobile browsers may briefly block autoplay; we retry on visibility/interaction events.
      });
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("pageshow", tryPlay);
    window.addEventListener("touchstart", tryPlay, { passive: true });

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      src="/videos/hero-loop.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate noremoteplayback"
      aria-hidden
    />
  );
}
