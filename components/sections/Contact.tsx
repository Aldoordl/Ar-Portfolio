// components/sections/Contact.tsx

import { siteConfig } from "@/lib/data";
import SectionLabel from "../ui/SectionLabel";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__top">
          <SectionLabel>Contact / Collaboration</SectionLabel>

          <h2 className="contact__title">Have an idea worth shaping?</h2>

          <p className="contact__intro">
            I am open to selected creative projects, portfolio collaborations,
            experimental web ideas, and digital experiences that need visual
            direction, interface thinking, and careful execution.
          </p>
        </div>

        <div className="contact__panel">
          <div className="contact__main">
            <span className="contact__small">Start a conversation</span>

            <a href={`mailto:${siteConfig.email}`} className="contact__email" data-cursor-label="Email">
              {siteConfig.email}
            </a>

            <p>
              Send me your idea, reference, rough concept, or unfinished thought.
              I can help turn it into a clearer visual direction and a working
              digital experience.
            </p>
          </div>

          <div className="contact__side">
            <div className="contact__availability">
              <span>Availability</span>
              <strong>Open for selected projects</strong>
            </div>

            <div className="contact__socials">
              {siteConfig.socials.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  key={social.name}
                  data-cursor-label={social.name}
                >
                  <span>{social.name}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}