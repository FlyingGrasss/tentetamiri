"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Defer Lenis initialization until the browser is idle so it doesn't
    // block the main thread during LCP / first paint. Falls back to
    // setTimeout on browsers that don't support requestIdleCallback.
    const init = () => {
      const lenis = new Lenis({
        anchors: true,
        autoRaf: true,
        duration: 1.1,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      });

      return () => lenis.destroy();
    };

    let cleanup: (() => void) | undefined;

    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(() => {
        cleanup = init();
      });
      return () => {
        cancelIdleCallback(id);
        cleanup?.();
      };
    } else {
      const id = setTimeout(() => {
        cleanup = init();
      }, 200);
      return () => {
        clearTimeout(id);
        cleanup?.();
      };
    }
  }, []);

  return null;
}
