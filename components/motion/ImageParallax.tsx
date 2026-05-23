"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type ImageParallaxProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  speed?: number;
  scale?: number;
};

export default function ImageParallax({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  imageClassName = "",
  speed = 70,
  scale = 1.12,
}: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-speed, speed]
  );

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [scale, 1.03, scale]
  );

  const y = useSpring(rawY, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const imageScale = useSpring(rawScale, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  return (
    <div ref={ref} className={`image-parallax ${className}`}>
      <motion.div
        className="image-parallax__media"
        style={{
          y,
          scale: imageScale,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`image-parallax__image ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
}