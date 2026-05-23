import type { Metadata } from "next";
import ImageParallax from "@/components/motion/ImageParallax";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";
import { caseStudies, works } from "@/lib/data";
import { imageSizes } from "@/lib/imageSizes";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const work = works.find((item) => item.slug === slug);
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!work || !caseStudy) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  const image = work.heroImage || work.coverImage || "/opengraph-image.jpg";

  return {
    title: work.title,
    description: work.description,
    alternates: {
      canonical: `/work/${work.slug}`,
    },
    openGraph: {
      title: `${work.title} | Case Study`,
      description: work.description,
      url: `/work/${work.slug}`,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${work.title} case study preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} | Case Study`,
      description: work.description,
      images: [image],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;

  const work = works.find((item) => item.slug === slug);
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!work || !caseStudy) {
    notFound();
  }

  return (
    <main className="case">
      <section className="case__hero">
        <div className="case__meta">
          <span>{work.number}</span>
          <span>{work.type}</span>
          <span>{work.year}</span>
        </div>

        <h1>{work.title}</h1>

        <p>{caseStudy.overview}</p>

        <div className="case__tags">
          {work.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="case__visual">
        <div className="case__visualInner">
          <ImageParallax
            src={work.heroImage}
            alt={work.title}
            priority
            sizes={imageSizes.caseHero}
            imageClassName="case__heroImage"
            speed={86}
            scale={1.12}
          />

          <div className="case__visualCaption">
            <span>{work.type}</span>
            <strong>{work.title}</strong>
          </div>
        </div>
      </section>

      <section className="case__content">
        <div className="case__sidebar">
          <div>
            <span>Role</span>
            <p>{caseStudy.role}</p>
          </div>

          <div>
            <span>Duration</span>
            <p>{caseStudy.duration}</p>
          </div>

          <div>
            <span>Tools</span>
            <div className="case__tools">
              {caseStudy.tools.map((tool) => (
                <small key={tool}>{tool}</small>
              ))}
            </div>
          </div>
        </div>

        <div className="case__details">
          <article>
            <span>Challenge</span>
            <h2>What needed to be solved</h2>
            <p>{caseStudy.challenge}</p>
          </article>

          <article>
            <span>Creative Direction</span>
            <h2>How the idea was shaped</h2>
            <p>{caseStudy.direction}</p>
          </article>

          <article>
            <span>Process</span>
            <h2>Steps behind the work</h2>

            <ul>
              {caseStudy.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>

          <article>
            <span>Outcome</span>
            <h2>Final reflection</h2>
            <p>{caseStudy.outcome}</p>
          </article>
        </div>
      </section>

      <section className="case__gallery">
        <div className="case__galleryHeader">
          <SectionLabel>Visual Showcase</SectionLabel>
          <h2>Selected screens and visual moments.</h2>
        </div>

        <div className="case__galleryGrid">
          {work.gallery.map((image, index) => (
            <figure
              className={`case__galleryItem ${
                index === 0 ? "case__galleryItem--large" : ""
              }`}
              key={image.src}
              data-cursor-label="Wow 👀"
            >
              <ImageParallax
                src={image.src}
                alt={image.alt}
                sizes={
                  index === 0
                    ? "(max-width: 900px) calc(100vw - 40px), (max-width: 1440px) calc(100vw - 56px), 1384px"
                    : "(max-width: 900px) calc(100vw - 40px), 50vw"
                }
                imageClassName="case__galleryImage"
                speed={index === 0 ? 72 : 52}
                scale={index === 0 ? 1.1 : 1.08}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="case__next">
        <p>Ready to shape another idea?</p>
        <Button href="/#contact" variant="primary" cursorLabel="Contact">
          Start a conversation <span>↗</span>
        </Button>
      </section>
    </main>
  );
}