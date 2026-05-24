import type { Metadata } from "next";
import ImageParallax from "@/components/motion/ImageParallax";
import TransitionLink from "@/components/motion/TransitionLink";
import TextReveal from "@/components/motion/TextReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { playgroundItems } from "@/lib/data";
import { imageSizes } from "@/lib/imageSizes";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "A visual archive of creative experiments, motion studies, interface explorations, and digital playground concepts.",
  alternates: {
    canonical: "/playground",
  },
};

export default function PlaygroundPage() {
  return (
    <main className="playground-archive">
      <section className="playground-archive__hero">
        <SectionLabel>Creative Playground</SectionLabel>

        <div className="playground-archive__intro">
          <h1>
            <TextReveal text="Experiments, interactive fragments, and visual thoughts." />
          </h1>

          <p>
            <TextReveal text="A dedicated space for raw exploration outside formal client frameworks. This is where user interface concepts, interaction flows, and visual systems are stress-tested, refined, and shaped before maturing into production-ready work." />  
          </p>
        </div>
      </section>

      <section className="playground-archive__grid">
        {playgroundItems.map((item) => (
          <TransitionLink
            href={`/playground/${item.slug}`}
            className="playground-archive__card"
            key={item.slug}
            data-cursor-label="Open"
          >
            <div className="playground-archive__visual">
              <ImageParallax
                src={item.coverImage}
                alt={item.title}
                sizes={imageSizes.playgroundCard}
                imageClassName="playground-archive__image"
                speed={48}
                scale={1.08}
              />
            </div>

            <div className="playground-archive__content">
              <div className="playground-archive__meta">
                <span>{item.number}</span>
                <span>{item.year}</span>
              </div>

              <span className="playground-archive__type">{item.type}</span>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              <div className="playground-archive__tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </TransitionLink>
        ))}
      </section>
    </main>
  );
}