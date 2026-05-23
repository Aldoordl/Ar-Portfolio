"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type MagneticButtonBaseProps = {
  children: ReactNode;
  className?: string;
  cursorLabel?: string;
};

type MagneticButtonAnchorProps = MagneticButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type MagneticButtonNativeProps = MagneticButtonBaseProps & {
  href?: undefined;
  external?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type MagneticButtonProps =
  | MagneticButtonAnchorProps
  | MagneticButtonNativeProps;

export default function MagneticButton(props: MagneticButtonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  };

  const x = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]), springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    mouseX.set(relativeX * 2 - 1);
    mouseY.set(relativeY * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if ("href" in props && props.href) {
    const {
      href,
      external = false,
      children,
      className = "",
      cursorLabel,
      ...anchorProps
    } = props;

    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    return (
      <motion.a
        href={href}
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.97 }}
        className={`magnetic-button ${className}`}
        data-cursor-label={cursorLabel}
        target={isExternal && href.startsWith("http") ? "_blank" : undefined}
        rel={isExternal && href.startsWith("http") ? "noreferrer" : undefined}
        {...anchorProps}
      >
        {children}
      </motion.a>
    );
  }

  const {
    children,
    className = "",
    cursorLabel,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <motion.button
      type={type}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`magnetic-button ${className}`}
      data-cursor-label={cursorLabel}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}