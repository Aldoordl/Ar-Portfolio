// app/about/page.tsx

import Image from "next/image";
import type { Metadata } from "next";
import { aboutPage, siteConfig } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Personal story, creative philosophy, tools, and direction behind the creative frontend portfolio.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Aldo Ridlo",
    description:
      "Personal story, creative philosophy, tools, and direction behind the creative frontend portfolio.",
    url: "/about",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Aldo Ridlo creative frontend portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Aldo Ridlo",
    description:
      "Personal story, creative philosophy, tools, and direction behind the creative frontend portfolio.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="profile">
      <section className="profile__hero">
        <div className="profile__heroGrid">
          <div>
            <SectionLabel>About / Personal Story</SectionLabel>
            <h1>{aboutPage.headline}</h1>
          </div>

          <p>{aboutPage.intro}</p>
        </div>
      </section>

      <section className="profile__story">
        <div className="profile__portrait">
          <Image
            src={aboutPage.profileImage}
            alt={`${siteConfig.name} portrait`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
            className="profile__portraitImage"
          />
        </div>

        <div className="profile__storyText">
          <span>Who I am</span>
          <h2>Not just building pages. Building direction.</h2>
          <p>{aboutPage.story}</p>

          <Button href={aboutPage.cvUrl} variant="primary" className="profile__cv" cursorLabel="Check" target="_blank">
            See My CV <span>↗</span>
          </Button>
        </div>
      </section>

      <section className="profile__philosophy">
        <div className="profile__sectionHeader">
          <SectionLabel>Creative Philosophy</SectionLabel>
          <h2>How I think when shaping digital work.</h2>
        </div>

        <div className="profile__philosophyGrid">
          {aboutPage.philosophy.map((item, index) => (
            <article className="profile__philosophyCard" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile__timeline">
        <div className="profile__sectionHeader">
          <SectionLabel>Experience / Timeline</SectionLabel>
          <h2>A short view of how the direction grows.</h2>
        </div>

        <div className="profile__timelineList">
          {aboutPage.timeline.map((item) => (
            <article className="profile__timelineItem" key={item.year}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile__tools">
        <div className="profile__sectionHeader">
          <SectionLabel>Skills / Tools</SectionLabel>
          <h2>Things I use to turn ideas into digital form.</h2>
        </div>

        <div className="profile__toolsGrid">
          {aboutPage.tools.map((group) => (
            <article className="profile__toolCard" key={group.group}>
              <h3>{group.group}</h3>

              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile__exploring">
        <SectionLabel>Currently Exploring</SectionLabel>

        <div className="profile__exploringList">
          {aboutPage.currentlyExploring.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="profile__closing">
        <p>Still becoming, still exploring, still shaping ideas.</p>
        <Button href="/#contact" variant="primary" cursorLabel="Contact">
          Let's connect <span>↗</span>
        </Button>
      </section>
    </main>
  );
}