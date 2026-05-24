import ImageParallax from "@/components/motion/ImageParallax";
import TransitionLink from "@/components/motion/TransitionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { playgroundItems } from "@/lib/data";
import { imageSizes } from "@/lib/imageSizes";

export default function Playground() {
  const featuredItem = playgroundItems[0];
  const otherItems = playgroundItems.slice(1);

  return (
    <section className="playground" id="playground">
      <div className="playground__top">
        <SectionLabel>Creative Playground</SectionLabel>

        <h2 className="playground__title">
          Experiments, interactive fragments, and visual thoughts.
        </h2>

        <p className="playground__intro">
          A dedicated space for raw exploration outside formal client frameworks. This is 
          where user interface concepts, interaction flows, and visual systems are stress-tested, 
          refined, and shaped before maturing into production-ready work.
        </p>
      </div>

      <div className="playground__board">
        <TransitionLink
          href={`/playground/${featuredItem.slug}`}
          className="playground__feature"
          data-cursor-label="Explore"
        >
          <ImageParallax
            src={featuredItem.coverImage}
            alt={featuredItem.title}
            sizes={imageSizes.caseHero}
            imageClassName="playground__featureImage"
            speed={64}
            scale={1.1}
          />

          <div className="playground__featureOverlay">
            <div className="playground__featureHeader">
              <span>{featuredItem.number}</span>
              <span>{featuredItem.year}</span>
            </div>

            <div className="playground__featureContent">
              <p>{featuredItem.type}</p>
              <h3>{featuredItem.title}</h3>
            </div>

            <div className="playground__featureFooter">
              {featuredItem.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </TransitionLink>

        <div className="playground__items">
          {otherItems.map((item) => (
            <TransitionLink
              href={`/playground/${item.slug}`}
              className="playground__item"
              key={item.slug}
              data-cursor-label="Open"
            >
              <div className="playground__itemVisual">
                <ImageParallax
                  src={item.coverImage}
                  alt={item.title}
                  sizes={imageSizes.caseHero}
                  imageClassName="playground__itemImage"
                  speed={42}
                  scale={1.08}
                />
              </div>

              <div className="playground__itemBody">
                <div className="playground__itemMeta">
                  <span>{item.number}</span>
                  <span>{item.year}</span>
                </div>

                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="playground__itemTags">
                  {item.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  );
}