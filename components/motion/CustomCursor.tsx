"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, {
    stiffness: 420,
    damping: 34,
    mass: 0.45,
  });

  const springY = useSpring(cursorY, {
    stiffness: 420,
    damping: 34,
    mass: 0.45,
  });

  useEffect(() => {
    const canUseCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!canUseCursor || reduceMotion) return;

    setIsPointerDevice(true);

    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      const interactiveElement = target?.closest(
        "a, button, [data-cursor], .works__visual, .case__galleryItem"
      ) as HTMLElement | null;

      if (interactiveElement) {
        setIsHovering(true);
        setLabel(interactiveElement.dataset.cursorLabel ?? "");
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      const interactiveElement = target?.closest(
        "a, button, [data-cursor], .works__visual, .case__galleryItem"
      );

      if (interactiveElement) {
        setIsHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isPointerDevice) return null;

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? "is-hovering" : ""}`}
      style={{
        x: springX,
        y: springY,
      }}
      aria-hidden="true"
    >
      <span>{label}</span>
    </motion.div>
  );
}