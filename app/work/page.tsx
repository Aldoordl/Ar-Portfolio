import type { Metadata } from "next";
import ImageParallax from "@/components/motion/ImageParallax";
import TransitionLink from "@/components/motion/TransitionLink";
import TextReveal from "@/components/motion/TextReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { works } from "@/lib/data";
import { imageSizes } from "@/lib/imageSizes";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A curated archive of creative web experiences, interface explorations, and digital case studies.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main className="work-archive">
      <section className="work-archive__hero">
        <SectionLabel>Selected Archive</SectionLabel>

        <div className="work-archive__intro">
          <h1>
            <TextReveal text="Built from ideas, shaped into digital experiences." />
          </h1>

          <p>
            <TextReveal text="A curated selection of works, studies, and creative explorations — not only showing the final result, but also the way each idea is translated into structure, visuals, and interaction." />
          </p>
        </div>
      </section>

      <section className="work-archive__list">
        {works.map((work, index) => (
          <article className="work-archive__item" key={work.slug}>
            <div className="work-archive__meta">
              <span>{work.number ?? String(index + 1).padStart(3, "0")}</span>
              <span>{work.year}</span>
            </div>

            <TransitionLink
              href={`/work/${work.slug}`}
              className="work-archive__visual"
              data-cursor-label="View"
            >
              <ImageParallax
                src={work.coverImage}
                alt={work.title}
                sizes={imageSizes.caseHero}
                imageClassName="work-archive__image"
                speed={56}
                scale={1.1}
              />

              <div className="work-archive__overlay">
                <span>{work.type}</span>
                <strong>View Case</strong>
              </div>
            </TransitionLink>

            <div className="work-archive__content">
              <div>
                <span className="work-archive__type">{work.type}</span>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>

              <div className="work-archive__bottom">
                <div className="work-archive__tags">
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <TransitionLink
                  href={`/work/${work.slug}`}
                  className="work-archive__link"
                  data-cursor-label="Open"
                >
                  Open project
                  <span>↗</span>
                </TransitionLink>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}