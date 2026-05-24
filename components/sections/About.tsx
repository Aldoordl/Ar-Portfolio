// components/sections/About.tsx
import SectionLabel from "../ui/SectionLabel";
import { aboutCapabilities, aboutPrinciples } from "@/lib/data";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div className="about__sticky">
          <SectionLabel>About / Manifesto</SectionLabel>

          <h2 className="about__title">
            I do not just build layouts. I shape intuitive digital direction.
          </h2>
        </div>

        <div className="about__content">
          <p className="about__lead">
            I bridge the gap between creative strategy and digital development. I view this portfolio 
            not as a static checklist of completed work, but as an evolving case study of design systems, 
            user logic, and visual discipline.
          </p>

          <p className="about__body">
            Everything begins with observation—analyzing visual rhythms, mapping user behaviors, and 
            questioning the details that make an interface seamless. By combining creative direction with 
            a structured technical foundation, I transform loose concepts into polished, reliable interfaces. 
            I design for the intersection of aesthetic emotion and functional reality.
          </p>

          <div className="about__quote">
            <span>Creative statement</span>
            <p>
              “Design brings the visual direction, while structured execution makes the experience looks like real.”
            </p>
          </div>

          <div className="about__principles">
            {aboutPrinciples.map((item) => (
              <article className="about__principle" key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about__capabilities">
            {aboutCapabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}