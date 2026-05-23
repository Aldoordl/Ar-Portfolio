"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  by?: "word" | "char";
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
  by = "word",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once,
    margin: "-10% 0px -10% 0px",
  });

  const units = useMemo(() => {
    return by === "char" ? Array.from(text) : text.split(" ");
  }, [text, by]);

  return (
    <span ref={ref} className={`text-reveal ${className}`} aria-label={text}>
      {units.map((unit, index) => {
        const content = by === "word" ? `${unit}\u00A0` : unit;

        return (
          <span
            className="text-reveal__mask"
            aria-hidden="true"
            key={`${unit}-${index}`}
          >
            <motion.span
              className="text-reveal__item"
              initial={{ y: "112%" }}
              animate={isInView ? { y: "0%" } : { y: "112%" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + index * (by === "word" ? 0.045 : 0.018),
              }}
            >
              {content}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}