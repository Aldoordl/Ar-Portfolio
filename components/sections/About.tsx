// components/sections/About.tsx
import SectionLabel from "../ui/SectionLabel";

const principles = [
  {
    number: "01",
    title: "Concept before decoration",
    text: "Setiap visual harus punya alasan. Bukan hanya terlihat keren, tetapi juga membangun arah, pesan, dan pengalaman.",
  },
  {
    number: "02",
    title: "Motion with intention",
    text: "Animasi dipakai untuk memperkuat ritme, fokus, dan transisi — bukan sekadar efek tambahan.",
  },
  {
    number: "03",
    title: "Digital as playground",
    text: "Website adalah ruang eksplorasi: tempat ide, visual, interaksi, dan teknologi bertemu dalam satu pengalaman.",
  },
];

const capabilities = [
  "Creative Direction",
  "UI Design",
  "Frontend Development",
  "Visual System",
  "Motion Concept",
  "Brand Storytelling",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        <div className="about__sticky">
          <SectionLabel>About / Manifesto</SectionLabel>

          <h2 className="about__title">
            I do not just build pages. I build visual direction.
          </h2>
        </div>

        <div className="about__content">
          <p className="about__lead">
            I am a creative thinker who enjoys transforming scattered ideas into
            structured digital experiences. For me, a portfolio is not only a
            place to show completed works, but also a living archive of taste,
            process, experiments, and visual decisions.
          </p>

          <p className="about__body">
            My creative process starts from curiosity: observing references,
            collecting visual patterns, questioning why something feels good,
            then translating that feeling into layout, typography, interaction,
            and motion. I am interested in the space between concept and
            execution — where raw ideas become something people can actually
            see, use, and remember.
          </p>

          <div className="about__quote">
            <span>Creative statement</span>
            <p>
              “I believe strong ideas deserve strong execution — precise,
              expressive, and emotionally memorable.”
            </p>
          </div>

          <div className="about__principles">
            {principles.map((item) => (
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
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}