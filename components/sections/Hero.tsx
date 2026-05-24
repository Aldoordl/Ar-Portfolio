"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { heroPieces, heroSkills, siteConfig } from "@/lib/data";
import Button from "@/components/ui/Button";
import Marquee from "../ui/Marque";

export default function Hero() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(heroPieces[0].id);
  const [resetKey, setResetKey] = useState(0);

  const activePiece = heroPieces.find((piece) => piece.id === activeId) ?? heroPieces[0];

  return (
    <section className="hero">
      <div className="hero__noise" />
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />

      <div className="hero__content">
        <div className="hero__left">
          <div className="hero__eyebrow">
            <span>Personal Portfolio</span>
            <span>UI/UX & Digital Experience</span>
          </div>

          <h1 className="hero__title">
            <span>Creative mind.</span>
            <span>Digital execution.</span>
            <span>Visual exploration.</span>
          </h1>

          <p className="hero__description">
            {siteConfig.description}
          </p>

          <div className="hero__actions">
            <Button href="#work" variant="primary" cursorLabel="Explore">
              Explore Works <span>↗</span>
            </Button>

            <Button href="#contact" variant="ghost" cursorLabel="Contact">
              Let’s Connect
            </Button>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__playground">
            <div className="hero__playgroundTop">
              <span>Interactive Playground</span>
              <button type="button" onClick={() => setResetKey((key) => key + 1)} data-cursor-label="Click">
                Reset
              </button>
            </div>

            <motion.div
              key={resetKey}
              ref={constraintsRef}
              className="hero__dragArea"
            >
              <motion.div
                className="hero__magnet hero__magnet--one"
                animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="hero__magnet hero__magnet--two"
                animate={{ y: [0, 18, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {heroPieces.map((piece, index) => (
                <motion.button
                  type="button"
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.18}
                  whileDrag={{ scale: 1.08, zIndex: 20 }}
                  whileHover={{ scale: 1.04 }}
                  onMouseEnter={() => setActiveId(piece.id)}
                  onFocus={() => setActiveId(piece.id)}
                  onTap={() => setActiveId(piece.id)}
                  className={`hero__piece hero__piece--${piece.id} ${
                    activeId === piece.id ? "is-active" : ""
                  }`}
                  key={piece.id}
                  initial={{
                    x: [-42, 110, -10, 88][index],
                    y: [34, 88, 210, 280][index],
                    rotate: [-7, 5, -3, 7][index],
                  }}
                  data-cursor-label="Move"
                >
                  <span>{piece.number}</span>
                  <strong>{piece.label}</strong>
                </motion.button>
              ))}
            </motion.div>

            <div className="hero__livePanel">
              <span>{activePiece.number} / {activePiece.label}</span>
              <h2>{activePiece.title}</h2>
              <p>{activePiece.text}</p>
            </div>

            <div className="hero__hint">
              <span>Drag the elements</span>
              <span>Hover to shift the idea</span>
            </div>
          </div>
        </div>
      </div>

      <Marquee
        items={heroSkills}
        variant="custom"
        className="hero__marquee"
        trackClassName="hero__marqueeTrack"
      />
    </section>
  );
}