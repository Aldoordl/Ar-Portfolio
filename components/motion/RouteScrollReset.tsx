"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

export default function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const resetScroll = () => {
    const rawHash = window.location.hash;
    const hashId = rawHash.replace("#", "").split("#")[0];

    if (hashId) {
        const target = document.getElementById(hashId);

        if (target && lenis) {
        lenis.scrollTo(target, {
            offset: -110,
            duration: 0.9,
            lock: true,
        });
        return;
        }
    }

    if (lenis) {
        lenis.scrollTo(0, {
        immediate: true,
        force: true,
        });
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    };

    /**
     * Delay kecil supaya halaman baru sudah selesai mount
     * sebelum scroll dipaksa ke atas.
     */
    timeoutId = setTimeout(() => {
      requestAnimationFrame(resetScroll);
    }, 80);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname, lenis]);

  return null;
}