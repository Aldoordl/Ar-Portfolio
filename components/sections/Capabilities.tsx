// components/sections/Capabilities.tsx

import { capabilities } from "@/lib/data";
import SectionLabel from "../ui/SectionLabel";
import DraggableCard from "@/components/motion/DraggableCard";

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities__inner">
        <div className="capabilities__header">
          <SectionLabel>Capabilities</SectionLabel>

          <h2 className="capabilities__title">
            What I can shape from idea to interface.
          </h2>

          <p className="capabilities__intro">
            My work sits between concept and execution. I explore visual
            direction, build digital interfaces, and translate creative thinking
            into web experiences that feel intentional, expressive, and usable.
          </p>

          <p className="capabilities__hint">
            Drag the cards to feel the interaction.
          </p>
        </div>

        <div className="capabilities__layout">
          <div className="capabilities__statement">
            <div className="capabilities__statementTop">
              <span>Creative stack</span>
              <span>Selected focus</span>
            </div>

            <h3>
              Strategy, taste, interface, and motion — connected into one
              digital experience.
            </h3>

            <p>
              A strong portfolio is not built only from good visuals. It needs
              clear hierarchy, strong copy, precise spacing, emotional rhythm,
              and technical execution that supports the story.
            </p>
          </div>

          <div className="capabilities__cards">
            {capabilities.map((item, index) => (
              <DraggableCard
                className="capabilities__card"
                key={item.title}
                index={index}
                role="article"
              >
                <div className="capabilities__cardTop">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>Capability</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </DraggableCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}