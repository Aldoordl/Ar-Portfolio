"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks, siteConfig } from "@/lib/data";
import TransitionLink from "@/components/motion/TransitionLink";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/about") return pathname === "/about";
    if (href === "/work") return pathname.startsWith("/work");
    return false;
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__bar">
          <TransitionLink href="/" className="site-header__brand" data-cursor-label={siteConfig.name}>
            {siteConfig.name}
            <span>.</span>
          </TransitionLink>

          <nav className="site-header__nav" aria-label="Main navigation">
            {navigationLinks.map((link) => (
              <TransitionLink
                href={link.href}
                key={link.label}
                className={isActive(link.href) ? "is-active" : ""} 
                data-cursor-label="Click"
              >
                {link.label}
              </TransitionLink>
            ))}
          </nav>

          <button
            type="button"
            className="site-header__menuButton"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            data-cursor-label="Click"
          >
            <span />
            <span />
          </button>
        </div>

        <div className={`site-header__mobile ${isOpen ? "is-open" : ""}`}>
          {navigationLinks.map((link) => (
            <TransitionLink
              href={link.href}
              key={link.label}
              onClick={() => setIsOpen(false)}
              data-cursor-label="Click"
            >
              {link.label}
            </TransitionLink>
          ))}
        </div>
      </div>
    </header>
  );
}