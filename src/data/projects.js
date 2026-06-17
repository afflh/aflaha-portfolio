// Single source of truth for all five projects.
// Drives the homepage cards AND the dedicated /projects/:slug case-study pages.
// Order here is the canonical project order (also used for prev/next navigation).
//
// Image paths point at the curated assets copied into /public/assets.
// If you want to swap in a different image, drop it in public/assets and update the path.

export const PROJECTS = [
  {
    slug: 'jenius-academy',
    no: '01',
    title: 'Jenius Academy',
    category: 'UI/UX Design',
    type: 'Individual HCI Course Project',
    role: 'UI/UX Designer & Front-End Developer',
    roleShort: 'UI/UX Designer & Front-End Developer',
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    hook: 'Learning to design for users, not just build pages.',
    cardHook: 'My first step from building features to designing experiences.',
    cover: './assets/proj-jenius.png',
    coverPosition: 'center top',
    link: 'https://github.com/afflh/JeniusAcademy',
    linkLabel: 'View GitHub',
    evidenceLabel: 'Outcome',
    evidenceShort: 'Shifted from building pages to designing user flows & visual hierarchy.',
    story:
      'Jenius Academy was my first UI/UX-focused project, built for a Human Computer Interaction course. It shifted my mindset from simply building features to intentionally designing experiences — thinking about how a real person would discover, understand, and move through a learning platform.',
    built:
      'A web-based learning platform prototype with landing pages, learning package sections, and a complete login/register flow. I designed the interface in Figma, then implemented it in HTML, CSS, and JavaScript, focusing on layout, visual hierarchy, and a coherent user journey.',
    roleDetail:
      'As the individual designer and front-end developer, I owned the full surface: information architecture, wireframes, visual design, and the front-end implementation that turned those screens into a working prototype.',
    evidence: [
      'Web-based learning platform prototype',
      'Landing pages, learning package sections, and a login/register flow',
      'End-to-end design carried from Figma into working HTML/CSS/JS',
    ],
    learned:
      'Layout, visual hierarchy, user flow, and interface decisions directly shape how users understand and interact with a product. Good design is not decoration — it is how people make sense of what they are using.',
    gallery: [
      { src: './assets/gal-jenius-1.png', alt: 'Jenius Academy landing page design' },
      { src: './assets/gal-jenius-2.png', alt: 'Jenius Academy learning package & flow screens' },
    ],
  },
  {
    slug: 'whattocook',
    no: '02',
    title: 'WhatToCook',
    category: 'AI Product',
    type: 'Team AI Course Project',
    role: 'System Designer · Logic Developer · Front-End Integrator',
    roleShort: 'System Designer · Logic Dev · Frontend',
    tools: ['React.js', 'React Native', 'TheMealDB API', 'Android Emulator'],
    hook: 'Turning available ingredients into simple recipe decisions.',
    cardHook: 'From making something smart to making something useful.',
    cover: './assets/proj-whattocook.png',
    coverPosition: 'center',
    link: 'https://github.com/afflh/WhatToCook',
    linkLabel: 'View GitHub',
    evidenceLabel: 'Outcome',
    evidenceShort: 'Product value comes from solving a real problem clearly.',
    story:
      'WhatToCook started from an everyday problem: having ingredients at home but not knowing what to cook with them. As a team AI course project, we wanted to turn that small moment of friction into a simple, confident decision.',
    built:
      'A mobile recipe recommendation app where users enter the ingredients they have. The app retrieves matching recipes through TheMealDB API and uses rule-based matching to surface options that actually fit what is available — reducing effort instead of adding complexity.',
    roleDetail:
      'I worked as system designer, logic developer, and front-end integrator: shaping how ingredient input flows into recommendations, implementing the matching logic, and integrating it into the React.js / React Native interface tested on the Android emulator.',
    evidence: [
      'Mobile recipe recommendation app',
      'Ingredient input → API-based retrieval → rule-based matching',
      'Built and tested with React.js, React Native, and TheMealDB API',
    ],
    learned:
      'Smart systems do not need to be complicated. They need to reduce effort and support decisions — value comes from solving a real problem clearly, not from technical complexity for its own sake.',
    gallery: [
      { src: './assets/gal-whattocook-mockup.png', alt: 'WhatToCook app — full screen flow mockup', shape: 'phone', span: true },
      { src: './assets/gal-whattocook-login.png', alt: 'WhatToCook login screen', shape: 'phone' },
      { src: './assets/gal-whattocook-home.png', alt: 'WhatToCook home — search recipes by ingredients', shape: 'phone' },
      { src: './assets/gal-whattocook-search.png', alt: 'WhatToCook recipe search results', shape: 'phone' },
    ],
  },
  {
    slug: 'mental-health-nlp',
    no: '03',
    title: 'Mental Health NLP Research',
    category: 'AI Research',
    type: 'Team Research Project · Published Paper',
    role: 'First Author · Software · Data Curation · Formal Analysis · Writing',
    roleShort: 'First Author · Software · Data Curation',
    tools: ['Python', 'NLP', 'DistilBERT', 'BERT', 'RoBERTa', 'Google Colab'],
    hook: 'My first research paper on responsible AI for mental health text analysis.',
    cardHook: 'Can AI support mental-health screening responsibly?',
    cover: './assets/proj-mentalhealth.png',
    coverPosition: 'center top',
    link: 'https://www.sciencedirect.com/science/article/pii/S187705092502736X',
    linkLabel: 'View Paper',
    recognition: 'Presented & published at ICCSCI 2025',
    evidenceLabel: 'Impact',
    evidenceShort: 'Published & presented at ICCSCI 2025.',
    story:
      'This was my first research paper, and it was accepted, presented, and published at ICCSCI 2025 — one of the most meaningful milestones in my Computer Science journey. It pushed me to think carefully about what responsible AI really means when the subject matter is as sensitive as mental health.',
    built:
      'A study comparing DistilBERT, BERT, and RoBERTa for multiclass mental health text classification using social media data. We curated and prepared the dataset, ran model comparisons, and analyzed the trade-offs between accuracy and efficiency.',
    roleDetail:
      'As first author, I led the software, data curation, formal analysis, and writing — from preparing the dataset and running the experiments to interpreting results and communicating findings honestly, including the limitations.',
    evidence: [
      'Compared DistilBERT, BERT, and RoBERTa for multiclass mental health text classification',
      'Social-media-sourced dataset, curated and analyzed for the study',
      'Presented & published at ICCSCI 2025 — Author & Oral Presenter recognition',
    ],
    learned:
      'Responsible AI is not only about accuracy — it is also about efficiency, ethical boundaries, and honest communication of limitations. AI should support awareness and research, not replace professional diagnosis.',
    gallery: [
      { src: './assets/gal-mentalhealth-1.png', alt: 'Mental Health NLP research — model comparison' },
      { src: './assets/cert-iccsci-author.png', alt: 'ICCSCI 2025 Author certificate' },
      { src: './assets/cert-iccsci-oral.png', alt: 'ICCSCI 2025 Oral Presenter certificate' },
    ],
  },
  {
    slug: 'ubee',
    no: '04',
    title: 'UBEE',
    category: 'Entrepreneurship',
    type: 'Team Entrepreneurship / Market Validation Project',
    role: 'CEO / Team Leader',
    roleShort: 'CEO / Team Leader',
    tools: ['Market Validation', 'Product', 'Operations', 'Team Coordination'],
    hook: 'Learning that a good idea only becomes real when customers respond.',
    cardHook: 'Testing an idea against real customers, pricing & constraints.',
    cover: './assets/proj-ubee.png',
    coverPosition: 'center',
    link: 'https://drive.google.com/drive/folders/1Xma9DIabwkqjiLSkIODo_Sx7qLY7gUlO',
    linkLabel: 'View Documentation',
    evidenceLabel: 'Impact',
    evidenceShort: '41 respondents · 60+ portions sold · Rp2.11M revenue.',
    metrics: [
      { value: '41', label: 'Respondents' },
      { value: '60+', label: 'Portions sold' },
      { value: 'Rp2.110.000', label: 'Revenue' },
      { value: 'Rp660.741', label: 'Net profit' },
    ],
    story:
      'UBEE turned local purple sweet potato into a healthy product that feels modern, affordable, and attractive for young consumers. As a market-validation project, the goal was not just to have an idea — it was to find out whether real customers would actually respond to it.',
    built:
      'A real product taken to market: positioning, pricing, and a value proposition aimed at young consumers, validated through survey research and actual sales rather than assumptions.',
    roleDetail:
      'As CEO and team leader, I owned the product concept, target market, business direction, team coordination, and market validation — keeping the team aligned while balancing customer interest against operational reality.',
    evidence: [
      '41 survey respondents informing product direction',
      '60+ portions sold to real customers',
      'Rp2.110.000 revenue · Rp660.741 net profit',
    ],
    learned:
      'Product value cannot be proven by assumptions alone. It needs real customers, real feedback, and real constraints. Market interest must be balanced with operational readiness, consistency, cost efficiency, and realistic decision-making.',
    gallery: [
      { src: './assets/gal-ubee-1.png', alt: 'UBEE product' },
      { src: './assets/gal-ubee-2.png', alt: 'UBEE branding & sales' },
    ],
  },
  {
    slug: 'veritrace',
    no: '05',
    title: 'VeriTrace',
    category: 'Full-Stack AI',
    type: 'Team Microsoft Hackathon Project',
    role: 'Full-Stack Developer',
    roleShort: 'Full-Stack Developer',
    tools: ['React', 'FastAPI', 'Python', 'SQLite', 'Azure Document Intelligence'],
    hook: 'Learning to build AI that supports trust, not just automation.',
    cardHook: 'AI that makes evidence easier to inspect — humans keep judgment.',
    cover: './assets/proj-veritrace.png',
    coverPosition: 'center top',
    link: 'https://github.com/RickyRudiansyah/ComplyScope',
    linkLabel: 'View GitHub',
    evidenceLabel: 'Impact',
    evidenceShort: 'Microsoft hackathon · deterministic validation engine.',
    story:
      'VeriTrace changed the way I see AI. Before this project, I often thought of AI as a way to make systems smarter. Through this Microsoft hackathon, I learned that in real verification workflows, being smart is not enough — the system also needs to be traceable, reviewable, and safe to trust.',
    built:
      'VeriTrace helps QA, warehouse, and procurement teams verify incoming material documents by comparing COA, Material Label, and approved master data. It extracts document information, validates fields, calculates a risk score and decision, and stores verification history for audit.',
    roleDetail:
      'As a full-stack developer, I worked across the backend (FastAPI), the frontend (React), the validator, the risk engine, and the UI — combining Azure Document Intelligence extraction with a deterministic validation engine so results stay explainable.',
    evidence: [
      'Extracts and compares COA, Material Label, and approved master data',
      'Field validation + risk score + decision, with stored verification history for audit',
      'Deterministic validation engine alongside Azure Document Intelligence',
    ],
    learned:
      'Responsible AI should make evidence clearer, reduce review friction, and help humans make better decisions — without taking control away from the people responsible for final judgment.',
    gallery: [
      { src: './assets/gal-veritrace-1.png', alt: 'VeriTrace verification dashboard' },
    ],
  },
]

export const PROJECTS_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]))

export function getAdjacentProjects(slug) {
  const i = PROJECTS.findIndex((p) => p.slug === slug)
  if (i === -1) return { prev: null, next: null }
  return {
    prev: i > 0 ? PROJECTS[i - 1] : null,
    next: i < PROJECTS.length - 1 ? PROJECTS[i + 1] : null,
  }
}
