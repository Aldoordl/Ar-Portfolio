"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/components/motion/TransitionProvider";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function cleanDuplicateHash(href: string) {
  if (!href.includes("#")) return href;

  const [path, firstHash] = href.split("#");

  if (!firstHash) return path || "/";

  return `${path || "/"}#${firstHash}`;
}

function normalizeHref(href: string, pathname: string) {
  const cleanedHref = cleanDuplicateHash(href);

  const isExternal =
    cleanedHref.startsWith("http") ||
    cleanedHref.startsWith("mailto:") ||
    cleanedHref.startsWith("tel:");

  if (isExternal) return cleanedHref;

  /**
   * Kalau link hanya "#contact":
   * - di homepage tetap "#contact"
   * - di page lain ubah ke "/#contact"
   */
  if (cleanedHref.startsWith("#")) {
    return pathname === "/" ? cleanedHref : `/${cleanedHref}`;
  }

  return cleanedHref;
}

export default function TransitionLink({
  href,
  children,
  className = "",
  target,
  onClick,
  ...props
}: TransitionLinkProps) {
  const pathname = usePathname();
  const { startPageTransition } = usePageTransition();

  const normalizedHref = normalizeHref(href, pathname || "/");

  const isExternal =
    normalizedHref.startsWith("http") ||
    normalizedHref.startsWith("mailto:") ||
    normalizedHref.startsWith("tel:");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) return;
    if (isExternal) return;
    if (target === "_blank") return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const currentPath = pathname || "/";
    const [hrefPathRaw, hash] = normalizedHref.split("#");
    const hrefPath = hrefPathRaw || currentPath;

    const isSamePageHash = Boolean(hash) && hrefPath === currentPath;

    /**
     * Kalau masih di halaman yang sama, biarkan browser/Lenis
     * menangani anchor scroll.
     */
    if (isSamePageHash) {
      return;
    }

    event.preventDefault();
    startPageTransition(normalizedHref);
  };

  return (
    <a
      href={normalizedHref}
      className={className}
      target={target}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}