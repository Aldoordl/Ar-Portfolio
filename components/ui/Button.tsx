"use client";

import MagneticButton, {
  type MagneticButtonProps,
} from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "glass";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = MagneticButtonProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <MagneticButton
      className={cn(
        "ui-button",
        `ui-button--${variant}`,
        `ui-button--${size}`,
        className
      )}
      {...props}
    />
  );
}