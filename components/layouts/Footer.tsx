import TransitionLink from "@/components/motion/TransitionLink";
import { navigationLinks, siteConfig, heroSkills } from "@/lib/data";
import TextReveal from "@/components/motion/TextReveal";
import SectionLabel from "../ui/SectionLabel";
import Marquee from "../ui/Marque";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__aura site-footer__aura--one" />
      <div className="site-footer__aura site-footer__aura--two" />

      <Marquee
        items={heroSkills}
        variant="ui"
      />

      <div className="site-footer__inner">
        <div className="site-footer__statement">
          <SectionLabel>Final Scene</SectionLabel>

          <h2>
            <TextReveal text="Ideas deserve better than staying unfinished." />
          </h2>

          <p>
            Let’s shape raw thoughts, visual references, and scattered concepts
            into a digital experience that feels clear, alive, and memorable.
          </p>

          <a href={`mailto:${siteConfig.email}`} className="site-footer__cta" data-cursor-label="Email me">
            Start a conversation
            <span>↗</span>
          </a>
        </div>

        <div className="site-footer__panel">
          <div className="site-footer__identity">
            <TransitionLink  href="/" className="site-footer__brand" data-cursor-label={siteConfig.name}>
              {siteConfig.name}
              <span>.</span>
            </TransitionLink >

            <p>
              A personal creative portfolio exploring visual direction,
              interface design, interaction, and digital experience.
            </p>
          </div>

          <div className="site-footer__links">
            <div>
              <span>Navigation</span>

              {navigationLinks.map((link) => (
                <TransitionLink  href={link.href} key={link.label} data-cursor-label="Click">
                  {link.label}
                </TransitionLink >
              ))}
            </div>

            <div>
              <span>Social</span>

              {siteConfig.socials.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  key={social.name}
                  data-cursor-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 {siteConfig.name}. All rights reserved.</span>
          <span>Designed and built as a creative playground.</span>
        </div>
      </div>
    </footer>
  );
}