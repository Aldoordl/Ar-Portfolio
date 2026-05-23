// lib/data.ts

export const siteConfig = {
  name: "Aldo Ridlo",
  url: "https://yourdomain.com",
  email: "yourmail@email.com",
  role: "Creative Frontend Developer",
  description:
    "A personal creative portfolio exploring visual direction, interface design, motion, and digital experience.",
  keywords: [
    "creative frontend developer",
    "personal portfolio",
    "web experience",
    "creative direction",
    "interaction design",
    "Next.js portfolio",
  ],
  socials: [
    {
      name: "Instagram",
      href: "https://instagram.com/",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
    },
    {
      name: "Behance",
      href: "https://behance.net/",
    },
    {
      name: "GitHub",
      href: "https://github.com/",
    },
  ],
};

export const navigationLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Playground",
    href: "/#playground",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export const heroSkills = [
  "Creative Direction",
  "UI Exploration",
  "Web Experience",
  "Motion Thinking",
  "Digital Storytelling",
];

export const heroPieces = [
  {
    id: "concept",
    number: "01",
    label: "Concept",
    title: "Ideas need direction.",
    text: "I collect raw ideas, references, and visual feelings — then turn them into a clear creative direction.",
  },
  {
    id: "motion",
    number: "02",
    label: "Motion",
    title: "Movement creates rhythm.",
    text: "Small interactions, soft transitions, and scroll-based motion make the interface feel alive.",
  },
  {
    id: "interface",
    number: "03",
    label: "Interface",
    title: "Layout should breathe.",
    text: "A good interface is not only beautiful. It needs hierarchy, spacing, clarity, and emotion.",
  },
  {
    id: "execution",
    number: "04",
    label: "Execution",
    title: "Ideas become real.",
    text: "Creative concepts are translated into working digital experiences through frontend execution.",
  },
];

export const aboutPrinciples = [
  {
    number: "01",
    title: "Concept before decoration",
    text: "Every visual decision needs a reason. Design should not only look beautiful, but also carry direction, message, and experience.",
  },
  {
    number: "02",
    title: "Motion with intention",
    text: "Motion is used to guide attention, create rhythm, and make transitions feel natural — not just to add visual effects.",
  },
  {
    number: "03",
    title: "Digital as playground",
    text: "A website can become a living space where ideas, visual systems, interaction, and technology meet.",
  },
];

export const aboutCapabilities = [
  "Creative Direction",
  "UI Design",
  "Frontend Development",
  "Visual System",
  "Motion Concept",
  "Brand Storytelling",
];

export const works = [
  {
    number: "01",
    slug: "personal-portfolio-experience",
    title: "Personal Portfolio Experience",
    type: "Web Experience",
    year: "2026",
    description:
      "A personal digital space built to express creative direction, visual taste, interaction design, and experimental web motion.",
    tags: ["Next.js", "Creative Direction", "Motion"],

    coverImage: "/images/works/personal-portfolio/cover.jpg",
    heroImage: "/images/works/personal-portfolio/hero.jpg",
    gallery: [
      {
        src: "/images/works/personal-portfolio/gallery-01.jpg",
        alt: "Homepage hero exploration",
      },
      {
        src: "/images/works/personal-portfolio/gallery-02.jpg",
        alt: "Selected works section",
      },
      {
        src: "/images/works/personal-portfolio/gallery-03.jpg",
        alt: "Interactive playground detail",
      },
    ],
  },
  {
    number: "02",
    slug: "visual-campaign-system",
    title: "Visual Campaign System",
    type: "Digital Campaign",
    year: "2026",
    description:
      "A structured visual system for social media content, combining message clarity, visual rhythm, and brand-oriented storytelling.",
    tags: ["Content Design", "Branding", "Storytelling"],

    coverImage: "/images/works/visual-campaign/cover.jpg",
    heroImage: "/images/works/visual-campaign/hero.jpg",
    gallery: [
      {
        src: "/images/works/visual-campaign/gallery-01.jpg",
        alt: "Campaign visual direction",
      },
      {
        src: "/images/works/visual-campaign/gallery-02.jpg",
        alt: "Social media content system",
      },
      {
        src: "/images/works/visual-campaign/gallery-03.jpg",
        alt: "Interactive playground detail",
      },
    ],
  },
  {
    number: "03",
    slug: "experimental-landing-page",
    title: "Experimental Landing Page",
    type: "Interface Concept",
    year: "2026",
    description:
      "A landing page concept focused on strong typography, expressive layout, and immersive interaction for modern digital brands.",
    tags: ["UI Design", "Frontend", "Interaction"],

    coverImage: "/images/works/experimental-landing/cover.jpg",
    heroImage: "/images/works/experimental-landing/hero.jpg",
    gallery: [
      {
        src: "/images/works/experimental-landing/gallery-01.jpg",
        alt: "Landing page hero design",
      },
      {
        src: "/images/works/experimental-landing/gallery-02.jpg",
        alt: "Landing page interaction section",
      },
    ],
  },
  {
    number: "04",
    slug: "creative-playground-archive",
    title: "Creative Playground Archive",
    type: "Exploration",
    year: "Ongoing",
    description:
      "A collection of unfinished ideas, visual experiments, interface drafts, and motion studies that document the creative process.",
    tags: ["Experiment", "Visual Study", "Digital Art"],

    coverImage: "/images/works/creative-playground/cover.jpg",
    heroImage: "/images/works/creative-playground/hero.jpg",
    gallery: [
      {
        src: "/images/works/creative-playground/gallery-01.jpg",
        alt: "Visual experiment archive",
      },
      {
        src: "/images/works/creative-playground/gallery-02.jpg",
        alt: "Motion study documentation",
      },
    ],
  },
];

export const caseStudies = [
  {
    slug: "personal-portfolio-experience",
    role: "Creative Direction, UI Design, Frontend Development",
    duration: "2026",
    overview:
      "A personal portfolio experience designed as a digital playground to express creative thinking, visual taste, interaction, and frontend execution.",
    challenge:
      "The challenge was to create a portfolio that does not feel like a generic developer website, but also does not become overly decorative. The website needed to communicate creative identity, technical ability, and visual direction in one coherent experience.",
    direction:
      "The visual direction uses a calm blue-green tone, editorial typography, soft gradients, generous spacing, and interactive elements to create a minimal yet expressive experience.",
    process: [
      "Defined the personal brand direction and creative positioning.",
      "Structured the homepage into Hero, About, Works, Playground, Capabilities, and Contact sections.",
      "Built a data-driven content structure so project and profile information can be updated easily.",
      "Designed interactive elements to make the portfolio feel more alive and personal.",
    ],
    outcome:
      "The result is a flexible portfolio foundation that can grow into a more advanced Awwwards-style website with motion, project pages, and richer creative experiments.",
    tools: ["Next.js", "TypeScript", "Framer Motion", "CSS", "Creative Direction"],
  },
  {
    slug: "visual-campaign-system",
    role: "Content Design, Visual Direction, Storytelling",
    duration: "2026",
    overview:
      "A visual campaign system focused on turning communication goals into structured social media visuals with consistent rhythm and message clarity.",
    challenge:
      "Many visual campaigns look attractive but fail to communicate clearly. The challenge was to balance aesthetics, readability, brand character, and audience engagement.",
    direction:
      "The direction focused on strong visual hierarchy, modular layouts, short persuasive copy, and consistent visual treatment across content formats.",
    process: [
      "Mapped the campaign objective and audience behavior.",
      "Created visual references and mood direction.",
      "Built repeatable layout systems for social media content.",
      "Refined copywriting and visual hierarchy for clarity.",
    ],
    outcome:
      "The system makes campaign content easier to scale while keeping the visual identity consistent and recognizable.",
    tools: ["Visual Design", "Copywriting", "Branding", "Content Strategy"],
  },
  {
    slug: "experimental-landing-page",
    role: "UI Design, Frontend Development, Interaction Design",
    duration: "2026",
    overview:
      "An experimental landing page concept exploring strong typography, immersive spacing, subtle interaction, and modern web aesthetics.",
    challenge:
      "The goal was to avoid a standard landing page structure and create a more memorable digital experience without sacrificing usability.",
    direction:
      "The design direction combines editorial layout, large type, interactive sections, and atmospheric visual treatment to create a premium web experience.",
    process: [
      "Explored layout references and interaction patterns.",
      "Designed the page structure around visual rhythm and user flow.",
      "Translated the design direction into reusable frontend components.",
      "Tested spacing, responsiveness, and visual balance.",
    ],
    outcome:
      "The landing page concept becomes a study in how visual direction and frontend execution can work together to create stronger digital presence.",
    tools: ["Next.js", "UI Design", "Interaction", "Responsive Layout"],
  },
  {
    slug: "creative-playground-archive",
    role: "Creative Exploration, Visual Study, Motion Concept",
    duration: "Ongoing",
    overview:
      "An archive of unfinished concepts, motion studies, interface sketches, and visual experiments that document the creative process.",
    challenge:
      "Not every creative idea becomes a final project, but many unfinished ideas still carry valuable visual thinking. The challenge was to create a space where process can be presented meaningfully.",
    direction:
      "The archive is designed as a flexible creative space that values experimentation, exploration, and visual documentation.",
    process: [
      "Collected unfinished ideas and visual experiments.",
      "Grouped explorations into motion, interface, visual system, and notes.",
      "Created a structure that can grow over time.",
      "Positioned the archive as part of the creative identity, not just a side section.",
    ],
    outcome:
      "The playground becomes a living part of the portfolio, showing not only what is finished, but also how ideas develop.",
    tools: ["Creative Research", "Visual Study", "Motion Thinking", "UI Exploration"],
  },
];

export const playgroundItems = [
  {
    number: "001",
    slug: "motion-interface-study",
    title: "Motion Interface Study",
    type: "Interaction Experiment",
    year: "2026",
    description:
      "An exploration of subtle motion, reveal timing, and interaction rhythm for premium digital interfaces.",
    coverImage: "/images/playground/motion-interface.jpg",
    tags: ["Motion", "Interface", "GSAP"],
  },
  {
    number: "002",
    slug: "visual-system-exploration",
    title: "Visual System Exploration",
    type: "Creative Direction",
    year: "2026",
    description:
      "A study of colors, typography, spacing, and visual atmosphere for a calm but expressive portfolio identity.",
    coverImage: "/images/playground/visual-system.jpg",
    tags: ["Art Direction", "Typography", "System"],
  },
  {
    number: "003",
    slug: "interactive-layout-lab",
    title: "Interactive Layout Lab",
    type: "Layout Experiment",
    year: "2026",
    description:
      "A layout experiment focused on depth, hover behavior, visual hierarchy, and responsive composition.",
    coverImage: "/images/playground/interactive-layout.jpg",
    tags: ["Layout", "Interaction", "Responsive"],
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Creative Direction",
    description:
      "Shaping visual direction, mood, message, and experience so an idea has a clear creative character.",
    points: ["Visual concept", "Mood direction", "Reference mapping"],
  },
  {
    number: "02",
    title: "UI & Web Experience",
    description:
      "Designing websites with strong visual hierarchy, clear structure, comfortable flow, and modern digital rhythm.",
    points: ["Landing page", "Portfolio website", "Interface design"],
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Turning interface ideas into responsive, interactive, component-based websites using modern frontend tools.",
    points: ["Next.js", "TypeScript", "Responsive layout"],
  },
  {
    number: "04",
    title: "Motion & Interaction",
    description:
      "Creating microinteractions, transitions, and scroll-based motion that make digital experiences feel more alive.",
    points: ["Scroll motion", "Microinteraction", "GSAP-ready"],
  },
];

export const aboutPage = {
  headline:
    "A creative mind learning to turn scattered ideas into digital experiences.",
  intro:
    "I am drawn to the space between idea and execution — where visual curiosity, interaction, storytelling, and frontend development meet.",
  story:
    "Most of my process starts from scattered references, unfinished thoughts, and small visual observations. I like exploring why something feels right, why a layout feels alive, and how a digital experience can carry emotion without losing clarity. For me, design and code are not separate things. Design gives the idea a direction, while code makes the idea real.",
  profileImage: "/images/profile/profile.jpg",
  cvUrl: "/cv/cv.pdf",

  philosophy: [
    {
      title: "Clarity before complexity",
      text: "A strong experience does not need to be crowded. It needs clear hierarchy, strong rhythm, and a reason behind every visual choice.",
    },
    {
      title: "Ideas need execution",
      text: "Having many ideas is not enough. The challenge is turning those ideas into something structured, usable, and memorable.",
    },
    {
      title: "Motion should guide",
      text: "Motion is not decoration. It should guide attention, create flow, and make the interface feel more natural.",
    },
  ],

  timeline: [
    {
      year: "2024",
      title: "Started exploring visual direction",
      description:
        "Focused on understanding layout, typography, visual references, and how digital visuals communicate emotion.",
    },
    {
      year: "2025",
      title: "Built creative and digital projects",
      description:
        "Started connecting design ideas with real digital output through websites, campaign visuals, and interface experiments.",
    },
    {
      year: "2026",
      title: "Focused on creative frontend experience",
      description:
        "Exploring Next.js, interaction design, motion, and Awwwards-style digital experiences as a personal creative direction.",
    },
  ],

  tools: [
    {
      group: "Design",
      items: ["Figma", "Visual Direction", "Layout", "Typography"],
    },
    {
      group: "Development",
      items: ["Next.js", "TypeScript", "CSS", "Responsive Design"],
    },
    {
      group: "Motion",
      items: ["Framer Motion", "GSAP", "Microinteraction", "Scroll Motion"],
    },
    {
      group: "Creative",
      items: ["Storytelling", "Campaign Visual", "Brand Thinking", "AI Workflow"],
    },
  ],

  currentlyExploring: [
    "Interactive web experience",
    "Motion-driven portfolio",
    "Creative coding",
    "Editorial web layout",
    "AI-assisted creative workflow",
  ],
};
