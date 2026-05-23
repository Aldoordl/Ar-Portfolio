"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEvent,
  ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from "framer-motion";

type ButtonType = "button" | "submit" | "reset";

type SafeAnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  | "children"
  | "className"
  | "href"
  | "style"
  | "type"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
>;

type SafeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "children"
  | "className"
  | "style"
  | "type"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
>;

type MagneticButtonBaseProps = {
  children: ReactNode;
  className?: string;
  cursorLabel?: string;
  style?: CSSProperties;
};

type MagneticButtonAnchorProps = MagneticButtonBaseProps & {
  href: string;
  external?: boolean;
} & SafeAnchorProps;

type MagneticButtonNativeProps = MagneticButtonBaseProps & {
  href?: never;
  external?: never;
  type?: ButtonType;
} & SafeButtonProps;

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

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      external = false,
      children,
      className = "",
      cursorLabel,
      style,
      target,
      rel,
      ...anchorProps
    } = props;

    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    const motionStyle: MotionStyle = {
      ...style,
      x,
      y,
    };

    return (
      <motion.a
        {...anchorProps}
        href={href}
        style={motionStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.97 }}
        className={`magnetic-button ${className}`}
        data-cursor-label={cursorLabel}
        target={
          target ??
          (isExternal && href.startsWith("http") ? "_blank" : undefined)
        }
        rel={
          rel ??
          (isExternal && href.startsWith("http") ? "noreferrer" : undefined)
        }
      >
        {children}
      </motion.a>
    );
  }

  const {
    children,
    className = "",
    cursorLabel,
    style,
    type,
    ...buttonProps
  } = props;

  const buttonType: ButtonType =
    type === "submit" || type === "reset" ? type : "button";

  const motionStyle: MotionStyle = {
    ...style,
    x,
    y,
  };

  return (
    <motion.button
      {...buttonProps}
      type={buttonType}
      style={motionStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`magnetic-button ${className}`}
      data-cursor-label={cursorLabel}
    >
      {children}
    </motion.button>
  );
}