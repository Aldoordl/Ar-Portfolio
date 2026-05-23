import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageParallax from "@/components/motion/ImageParallax";
import { playgroundItems } from "@/lib/data";
import { imageSizes } from "@/lib/imageSizes";

type PlaygroundDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PlaygroundDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const item = playgroundItems.find((playground) => playground.slug === slug);

  if (!item) {
    return {
      title: "Playground Not Found",
    };
  }

  return {
    title: item.title,
    description: item.description,
  };
}

export default async function PlaygroundDetailPage({
  params,
}: PlaygroundDetailPageProps) {
  const { slug } = await params;

  const item = playgroundItems.find((playground) => playground.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="playground-detail">
      <section className="playground-detail__hero">
        <div className="playground-detail__meta">
          <span>{item.number}</span>
          <span>{item.type}</span>
          <span>{item.year}</span>
        </div>

        <h1>{item.title}</h1>

        <p>{item.description}</p>

        <div className="playground-detail__tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="playground-detail__visual">
        <div className="playground-detail__visualInner">
          <ImageParallax
            src={item.coverImage}
            alt={item.title}
            priority
            sizes={imageSizes.caseHero}
            imageClassName="playground-detail__image"
            speed={86}
            scale={1.12}
          />
        </div>
      </section>
    </main>
  );
}