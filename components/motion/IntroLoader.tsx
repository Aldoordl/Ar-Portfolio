"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("has-seen-intro");

    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 1350);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("has-seen-intro", "true");
      document.body.style.overflow = "";
    }, 1850);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`intro-loader ${isLeaving ? "is-leaving" : ""}`}>
      <div className="intro-loader__aura intro-loader__aura--one" />
      <div className="intro-loader__aura intro-loader__aura--two" />

      <div className="intro-loader__content">
        <span>Entering the experience</span>

        <strong>
          {siteConfig.name}
          <em>.</em>
        </strong>

        <div className="intro-loader__progress">
          <span />
        </div>
      </div>
    </div>
  );
}