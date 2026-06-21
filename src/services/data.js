export const userData = {
  name: 'Yerassyl Seralyuly',
  title: 'Software Engineer',
  description: 'Game developer, engineer, artist, and sound designer. Building things that carry weight.',
  avatar: '/pfp.jpg',
  email: 'erasyl.seralyuly@gmail.com',
  phone: '+7 (708) 079 95 88',
  location: 'Astana, Kazakhstan',
  github: 'https://github.com/archxra',
  itch: 'https://itch.io/archxra',
};

export const educationData = [
  {
    date: 2012,
    dateLabel: '2012 — 2023',
    title: 'Ziyatket School of Balkhash city',
    text: 'Secondary education with a focus on natural sciences. Graduated with honors in 2023.',
  },
  {
    date: 2023,
    dateLabel: '2023 — 2026',
    title: 'Astana IT University',
    text: 'Bachelor of Software Engineering (3rd year). GPA: 3.3 / 4.0. Coursework: Web Technologies, Game Development, Mobile Development, Advanced Operating Systems, Computer Networks, DBMS.',
  },
];

export const experienceData = [
  {
    date: 'Jun. 2025 — Jul. 2025',
    info: {
      company: 'Astana Hub GameDev Center',
      job: 'Game Developer Intern',
      description: 'On 2D platformer "I Wanna Be The Boss" — programmed the core gameplay prototype and main menu in Unity/C#, contributed to game and level design, led project coordination with weekly meetings and milestone tracking.',
    },
  },
  {
    date: 'Mar. 2026 — May 2026',
    info: {
      company: 'Astana Hub GameDev Center',
      job: 'Game Developer Intern',
      description: 'Contributed to Bullet Fate as game designer, engineer, artist, and sound designer — mechanics implementation in Unity/C#, visual asset creation, and original audio composition.',
    },
  },
];

export const skillsData = [
  { name: 'Unity / C#', range: 80 },
  { name: 'React / React Native', range: 75 },
  { name: 'Node.js / Express', range: 65 },
  { name: 'Python', range: 70 },
  { name: 'Java / Spring Boot', range: 55 },
];

export const portfolioData = [
  {
    id: 1,
    title: 'Vehicle Inspection Hub',
    desc: 'Authentication service (Node.js/Express), React Native mobile app, Kafka microservices, Redis caching.',
    tags: ['mobile', 'backend'],
    image: '/vih_sc.png',
    link: 'https://github.com/Aweary69/Vehicle-inspection-hub',
  },
  {
    id: 2,
    title: 'Bullet Fate',
    desc: 'Unity/C# game with WWise audio. Core mechanics, progression systems, visual assets, and original audio.',
    tags: ['game'],
    image: '/bullet_fate.jpg',
    link: 'https://archxra.itch.io/bullet-fate',
  },
  {
    id: 3,
    title: 'I Wanna Be The Boss',
    desc: '2D platformer prototype in Unity/C#. Core gameplay, main menu, level design. Led team coordination.',
    tags: ['game'],
    image: '/iwbtb.png',
    link: 'https://archxra.itch.io/i-wanna-be-the-boss',
  },
  {
    id: 4,
    title: 'CV Portfolio App',
    desc: 'This app — React SPA with routing, 11 shared components, SCSS BEM, and responsive design.',
    tags: ['web'],
    image: '/portfolio_sc.png',
    link: 'https://github.com/archxra/cv-app',
  },
];

export const feedbackData = [
  {
    feedback: 'Equally comfortable writing clean systems code and crafting original audio. Yerassyl brought both disciplines to every project without compromising either.',
    reporter: {
      photoUrl: 'https://placehold.net/avatar.png',
      name: 'Team Lead — Astana Hub GameDev Center',
    },
  },
  {
    feedback: 'Took ownership of the authentication service from day one — secure, well-structured, and delivered on time. The kind of teammate who shows up to every meeting with a plan.',
    reporter: {
      photoUrl: 'https://placehold.net/avatar.png',
      name: 'Project Mentor',
    },
  },
];

export const aboutText = `Software Engineer based in Astana, Kazakhstan, currently in my 3rd year at Astana IT University.
I hold a key hybrid role wherever I work — engineering, design, and audio are not separate disciplines for me, they are one process.
Experienced in full-stack mobile development (React Native, Node.js, Spring Boot) and game development (Unity, C#, WWise).
I build things that carry weight: systems that perform, games that feel right, and audio that shapes the experience from the inside.`;
