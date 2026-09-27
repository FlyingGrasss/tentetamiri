"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      duration: 1.1,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
