"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setReduceMotion(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.065,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        stopInertiaOnNavigate: true,
        anchors: {
          offset: -110,
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}