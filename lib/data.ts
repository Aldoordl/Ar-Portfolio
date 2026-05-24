// lib/data.ts

export const siteConfig = {
  name: "Aldo Ridlo",
  url: "https://aldoridloportfolio.vercel.app/",
  email: "aldooridlo@gmail.com",
  role: "UI/UX Designer & Creative Strategist",
  description:
    "Hello! I am a passionate UI/UX designer and creative strategist dedicated to crafting intuitive, engaging, and highly functional digital solutions.",
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
      href: "https://instagram.com/aldoordl",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/aldoordl",
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com/aldoordl",
    },
    {
      name: "GitHub",
      href: "https://github.com/aldoordl",
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
    href: "/playground",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export const heroSkills = [
  "User Interface Design",
  "Creative Strategy",
  "Quality Assurance",
  "Software Engineering",
  "Digital Experience",
];

export const heroPieces = [
  {
    id: "concept",
    number: "01",
    label: "Concept",
    title: "Ideas need direction.",
    text: "Exploring fresh ideas to design intuitive interfaces and develop impactful digital systems.", 
  },
  {
    id: "ux-thinking",
    number: "02",
    label: "UX Thinking",
    title: "User-centered design.",
    text: "Focusing heavily on user needs to deliver seamless, seamless, and highly effective digital experiences.",
  },
  {
    id: "interface",
    number: "03",
    label: "Interface",
    title: "Layout should breathe.",
    text: "Crafting beautiful UI layouts that strike the perfect balance between visual emotion and functional clarity.", 
  },
  {
    id: "execution",
    number: "04",
    label: "Execution",
    title: "Ideas become real.",
    text: "Translating creative visions into fully operational web and software products through structured development.", 
  },
];

export const aboutPrinciples = [
  {
    number: "01",
    title: "User-focused & effective",
    text: "Every interface choice must serve the user, ensuring the final digital platform behaves smoothly and intuitively.", 
  },
  {
    number: "02",
    title: "Continuous visual growth",
    text: "Every unique project is treated as an open window to learn, test new design systems, and push creative boundaries.", 
  },
  {
    number: "03",
    title: "Cross-functional collaboration",
    text: "Bringing vision to life requires working closely with cross-functional teams to align strategy with seamless execution.", 
  },
];

export const aboutCapabilities = [
  "User Interface Design", 
  "User Experience Design", 
  "Quality Assurance & Control", 
  "Creative Direction", 
  "Software Engineering", 
  "Digital Marketing", 
];

// not ready
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

// not ready (idk, where)
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

// not ready
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
    title: "User Interface (UI) Design", 
    description:
      "Shaping crisp layout frameworks, comfortable typography ratios, and structured UI components that map directly to high-fidelity software parameters.", 
    points: ["Layout Systems", "Visual Hierarchy", "Component Consistency"],
  },
  {
    number: "02",
    title: "User Experience (UX) Strategy", 
    description:
      "Evaluating digital systems from the user's viewpoint to design seamless micro-interactions, reducing functional friction points entirely.", 
    points: ["User-Centered Flow", "Interaction Logic", "Friction Removal"],
  },
  {
    number: "03",
    title: "Quality Assurance & Control", 
    description:
      "Enforcing rigid product review sweeps to protect interface layouts, check functional loops, and guarantee bug-free deployment cycles.", 
    points: ["Product Sanity Checks", "Interface Validation", "System Testing"],
  },
  {
    number: "04",
    title: "Creative Direction & Strategy", 
    description:
      "Bridging the execution gap by steering creative identity assets from abstract visual briefs into memorable, fully realized system designs.", 
    points: ["Art Direction", "Concept Framing", "Creative Strategy Mapping"],
  },
];

export const aboutPage = {
headline:
    "A Creative Mind Designing Intuitve User Interfaces and Structured Digital Solutions.", 
  intro:
    "I am a student at UNU Yogyakarta with a solid baseline in Software Engineering, dedicating my career focus to user interface dynamics and creative systems.", 
  story:
    "My technical journey kicked off in Software Engineering at SMKN 1 Purwosari, which anchored my passion for clean code systems, HTML, and CSS. This background pushed me straight into the user experience realm. I realized apps shouldn't just run perfectly on servers, they need to feel completely natural, clean, and engaging to the human end-user.", 
  profileImage: "/images/profile/IMG_0143.PNG",
  cvUrl: "/cv/cv.pdf",

  philosophy: [
    {
      title: "Active Iterative Learning",
      text: "Every product build serves as a unique learning landscape to test fresh interface frameworks and sharpen my craft.", 
    },
    {
      title: "Form Meets Absolute Function",
      text: "An interface shines when visual elegance aligns smoothly with user utility, keeping flows intuitive and completely clear.", 
    },
    {
      title: "Open Professional Alignment",
      text: "Real visual impact blooms through crisp team communication, cross-discipline collaboration, and an adaptive layout workflow.", 
    },
  ],

timeline: [
    {
      year: "2022 - 2025",
      title: "Software Engineering Roots",
      description:
        "Mastered core programming structures, modular coding patterns, HTML, and CSS layouts at SMKN 1 Purwosari.",
    },
    {
      year: "2024 - 2025",
      title: "Studio & Agency Immersion",
      description:
        "Balanced dual-track responsibilities acting as Creative Director & QA/QC for Varcretife Studio alongside UI Design tasks at 10AM Studio.", 
    },
    {
      year: "2025 - Present",
      title: "Academic Growth & Certifications",
      description:
        "Pursuing higher education at Universitas Nahdlatul Ulama Yogyakarta while expanding my skill set via certified BNSP tracks and digital bootcamps.", 
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
      group: "Strategy & Quality",
      items: ["Quality Assurance", "Creative Strategy", "Digital Marketing"],
    },
    {
      group: "Creative",
      items: ["Storytelling", "Campaign Visual", "Brand Thinking", "AI Workflow"],
    },
  ],

  currentlyExploring: [
    "Motion-driven portfolio",
    "Interactive UI Component Prototyping",
    "Advanced User Experience Architecture",
    "Creative Frontend Framework Integrations",
    "Optimized Product Quality Management Systems",
  ],
};
