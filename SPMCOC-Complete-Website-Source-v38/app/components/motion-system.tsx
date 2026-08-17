"use client";

import { useEffect } from "react";

export function MotionSystem() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = 0;
    let activeTilt: HTMLElement | null = null;
    const resetTilt = (target: HTMLElement | null) => {
      target?.style.setProperty("--tilt-x", "0deg");
      target?.style.setProperty("--tilt-y", "0deg");
    };
    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${(event.clientX / window.innerWidth) * 100}%`);
        root.style.setProperty("--pointer-y", `${(event.clientY / window.innerHeight) * 100}%`);
        root.style.setProperty("--pointer-shift-x", `${(event.clientX / window.innerWidth - 0.5) * 2}`);
        root.style.setProperty("--pointer-shift-y", `${(event.clientY / window.innerHeight - 0.5) * 2}`);
        const target = (event.target as Element | null)?.closest<HTMLElement>("[data-tilt]") ?? null;
        if (target !== activeTilt) resetTilt(activeTilt);
        activeTilt = target;
        if (target) {
          const rect = target.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          target.style.setProperty("--tilt-x", `${(-y * 9).toFixed(2)}deg`);
          target.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
          target.style.setProperty("--glow-x", `${((x + 0.5) * 100).toFixed(1)}%`);
          target.style.setProperty("--glow-y", `${((y + 0.5) * 100).toFixed(1)}%`);
        }
      });
    };

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--scroll-progress", `${progress}`);
      root.style.setProperty("--page-scroll", `${window.scrollY}px`);
      document.body.classList.toggle("has-scrolled", window.scrollY > 20);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
      resetTilt(activeTilt);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
