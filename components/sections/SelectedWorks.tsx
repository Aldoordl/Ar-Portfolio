import ImageParallax from "@/components/motion/ImageParallax";
import TransitionLink from "@/components/motion/TransitionLink";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import { works } from "@/lib/data";
import { imageSizes } from "@/lib/imageSizes";

export default function SelectedWorks() {
  return (
    <section className="works" id="work">
      <div className="works__header">
        <SectionLabel>Selected Works</SectionLabel>

        <div className="works__headingGroup">
          <h2 className="works__title">
            Built from ideas, shaped into digital experiences.
          </h2>

          <p className="works__intro">
            A curated selection of works, studies, and creative explorations —
            not only showing the final result, but also the way each idea is
            translated into structure, visuals, and interaction.
          </p>

          <Button href="/work" variant="glass" cursorLabel="Explore">
            View all works <span>↗</span>
          </Button>
        </div>
      </div>

      <div className="works__list">
        {works.map((work) => (
          <article className="works__item" key={work.slug}>
            <div className="works__meta">
              <span>{work.number}</span>
              <span>{work.year}</span>
            </div>

            <TransitionLink  href={`/work/${work.slug}`} className="works__visual" data-cursor-label="View">
              <ImageParallax
                src={work.heroImage}
                alt={work.title}
                priority
                sizes={imageSizes.caseHero}
                imageClassName="case__heroImage"
                speed={86}
                scale={1.12}
              />

              <div className="works__visualOverlay">
                <span>{work.type}</span>
                <strong>View Project</strong>
              </div>
            </TransitionLink >

            <div className="works__content">
              <div>
                <span className="works__type">{work.type}</span>
                <h3>{work.title}</h3>
              </div>

              <p>{work.description}</p>

              <div className="works__tags">
                {work.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <TransitionLink  href={`/work/${work.slug}`} className="works__link" data-cursor-label="Open">
                View case study
                <span>↗</span>
              </TransitionLink >
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}