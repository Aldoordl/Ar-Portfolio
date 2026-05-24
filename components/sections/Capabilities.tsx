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
            What I can shape from raw idea to polished interface.
          </h2>

          <p className="capabilities__intro">
            Positioned at the intersection of aesthetic logic and technical execution, I map visual 
            identities, design clean user interfaces, and refine digital experiences. My goal is to 
            ensure every interaction is expressive, technically sound, and deeply memorable.
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
              Strategy, taste, interface, and interaction—connected into a singular digital experience.
            </h3>

            <p>
              A great portfolio is not built on strong visuals alone. It requires an intuitive layout 
              hierarchy, clear messaging, precise grid spacing, an emotional rhythm, and flawless technical 
              execution to back up the story.
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