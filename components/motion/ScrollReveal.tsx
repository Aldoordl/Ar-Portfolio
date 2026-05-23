"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollReveal() {
  const pathname = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsHydrated(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useGSAP(
    () => {
      if (!isHydrated) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const q = gsap.utils.selector(document.body);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (pathname === "/") {
        const heroTimeline = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
          delay: 0.08,
        });

        heroTimeline
          .from(".hero__eyebrow", {
            autoAlpha: 0,
            y: 18,
            duration: 0.8,
            clearProps: "all",
          })
          .from(
            ".hero__title span",
            {
              autoAlpha: 0,
              y: 90,
              rotate: 1.2,
              duration: 1.1,
              stagger: 0.12,
              clearProps: "all",
            },
            "-=0.35"
          )
          .from(
            ".hero__description",
            {
              autoAlpha: 0,
              y: 28,
              duration: 0.8,
              clearProps: "all",
            },
            "-=0.55"
          )
          .from(
            ".hero__actions",
            {
              autoAlpha: 0,
              y: 24,
              duration: 0.75,
              clearProps: "all",
            },
            "-=0.45"
          )
          .from(
            ".hero__playground",
            {
              autoAlpha: 0,
              y: 34,
              scale: 0.96,
              duration: 1,
              clearProps: "all",
            },
            "-=0.65"
          );
      }

      q(
        [
          ".about__title",
          ".about__lead",
          ".works__title",
          ".playground__title",
          ".capabilities__title",
          ".contact__title",
          ".profile__hero h1",
          ".profile__sectionHeader h2",
          ".profile__storyText h2",
          ".profile__closing p",
          ".case__hero h1",
          ".case__details h2",
          ".case__galleryHeader h2",
          ".case__next p",
          ".site-footer__statement h2",
        ].join(", ")
      ).forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 72,
            rotate: 0.8,
          },
          {
            autoAlpha: 1,
            y: 0,
            rotate: 0,
            duration: 1,
            ease: "power4.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      q(
        [
          ".about__body",
          ".works__intro",
          ".playground__intro",
          ".capabilities__intro",
          ".contact__intro",
          ".profile__heroGrid > p",
          ".profile__storyText p",
          ".case__hero p",
          ".case__details p",
          ".site-footer__statement p",
        ].join(", ")
      ).forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 32,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      q(
        [
          ".works__item",
          ".playground__item",
          ".capabilities__card",
          ".profile__philosophyCard",
          ".profile__timelineItem",
          ".profile__toolCard",
          ".case__details article",
          ".site-footer__panel",
        ].join(", ")
      ).forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 52,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      q(
        [
          ".works__visual",
          ".case__visual",
          ".case__galleryItem",
          ".profile__portrait",
        ].join(", ")
      ).forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 58,
            clipPath: "inset(12% 0% 12% 0% round 28px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            duration: 1.05,
            ease: "power4.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".site-footer__cta",
        {
          autoAlpha: 0,
          y: 28,
          scale: 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".site-footer__cta",
            start: "top 90%",
            once: true,
          },
        }
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },
    {
      dependencies: [pathname, isHydrated],
      revertOnUpdate: true,
    }
  );

  return null;
}