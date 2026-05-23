"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type SafeDivProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  | "children"
  | "className"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
>;

type DraggableCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
} & SafeDivProps;

export default function DraggableCard({
  children,
  className = "",
  index = 0,
  ...props
}: DraggableCardProps) {
  const [canDrag, setCanDrag] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimationControls();

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const handleChange = () => {
      setCanDrag(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!canDrag || shouldReduceMotion) {
    return (
      <div className={cn("drag-card", className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("drag-card drag-card--enabled", className)}
      drag
      dragConstraints={{
        top: -26,
        right: 26,
        bottom: 26,
        left: -26,
      }}
      dragElastic={0.16}
      dragMomentum={false}
      animate={controls}
      whileHover={{
        y: -6,
      }}
      whileDrag={{
        scale: 1.035,
        rotate: index % 2 === 0 ? 0.65 : -0.65,
        zIndex: 20,
      }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 24,
      }}
      onDragEnd={() => {
        controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 22,
          },
        });
      }}
      data-cursor-label="Drag"
      {...props}
    >
      {children}
    </motion.div>
  );
}