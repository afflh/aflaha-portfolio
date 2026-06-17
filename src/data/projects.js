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
    hook: 'Learning to design a clearer user journey, not just assemble pages.',
    cardHook: 'My first focused step from building screens to designing user experiences.',
    cover: './assets/proj-jenius.png',
    coverPosition: 'center top',
    link: 'https://github.com/afflh/JeniusAcademy',
    linkLabel: 'View GitHub',
    evidenceLabel: 'Outcome',
    evidenceShort: 'A complete learning-platform prototype from Figma to HTML/CSS/JS.',
    story:
      'Jenius Academy was my first UI/UX-focused project, created for a Human Computer Interaction course. It mattered because it shifted my mindset from simply making pages work to thinking about how a learner discovers, understands, and moves through a digital learning product.',
    built:
      'I built a web-based learning platform prototype with landing pages, learning package sections, and a complete login and registration flow. The prototype connected visual hierarchy, content structure, and navigation into one coherent user journey.',
    roleDetail:
      'As the individual designer and front-end developer, I owned the full process: information architecture, wireframes, visual design in Figma, and front-end implementation with HTML, CSS, and JavaScript.',
    evidence: [
      'Web-based learning platform prototype for an HCI course project',
      'Landing pages, learning package sections, and login/register flow',
      'Design translated from Figma into a working HTML/CSS/JS prototype',
    ],
    learned:
      'I learned that interface design is not decoration. Layout, hierarchy, wording, and flow shape whether users can understand a product quickly and move through it with confidence.',
    gallery: [
      { src: './assets/gal-jenius-1.png', alt: 'Jenius Academy landing page design' },
      { src: './assets/gal-jenius-2.png', alt: 'Jenius Academy learning package and flow screens' },
    ],
  },
  {
    slug: 'whattocook',
    no: '02',
    title: 'WhatToCook',
    category: 'AI Product',
    type: 'Team AI Course Project',
    role: 'System Designer / Logic Developer / Front-End Integrator',
    roleShort: 'System Designer / Logic Dev / Frontend',
    tools: ['React.js', 'React Native', 'TheMealDB API', 'Android Emulator'],
    hook: 'Turning available ingredients into practical recipe decisions.',
    cardHook: 'An AI-course product that turns everyday ingredients into useful recipe options.',
    cover: './assets/proj-whattocook.png',
    coverPosition: 'center',
    link: 'https://github.com/afflh/WhatToCook',
    linkLabel: 'View GitHub',
    evidenceLabel: 'Outcome',
    evidenceShort: 'A mobile recipe app using API retrieval and rule-based ingredient matching.',
    story:
      'WhatToCook started from a familiar problem: having ingredients at home but not knowing what to cook. For our AI course project, the goal was to make that everyday decision easier without making the user do extra work.',
    built:
      'We built a mobile recipe recommendation app where users enter ingredients they already have. The app retrieves recipes through TheMealDB API and applies rule-based matching so the suggestions stay relevant to what is actually available.',
    roleDetail:
      'I contributed as system designer, logic developer, and front-end integrator. I shaped the recommendation flow, implemented the ingredient matching logic, and integrated it into the React.js / React Native interface tested on the Android emulator.',
    evidence: [
      'Mobile recipe recommendation app for an AI course project',
      'Ingredient input connected to API-based recipe retrieval and rule-based matching',
      'Built and tested with React.js, React Native, TheMealDB API, and Android Emulator',
    ],
    learned:
      'I learned that smart systems are most valuable when they reduce effort. The technology should make a decision easier, clearer, and more useful for the person using it.',
    gallery: [
      { src: './assets/gal-whattocook-mockup.png', alt: 'WhatToCook full mobile flow mockup', shape: 'phone', span: true },
      { src: './assets/gal-whattocook-login.png', alt: 'WhatToCook login screen', shape: 'phone' },
      { src: './assets/gal-whattocook-home.png', alt: 'WhatToCook home screen for ingredient-based recipe search', shape: 'phone' },
      { src: './assets/gal-whattocook-search.png', alt: 'WhatToCook recipe search results', shape: 'phone' },
    ],
  },
  {
    slug: 'mental-health-nlp',
    no: '03',
    title: 'Mental Health NLP Research',
    category: 'AI Research',
    type: 'Team Research Project / Published Paper',
    role: 'First Author / Software / Data Curation / Formal Analysis / Writing',
    roleShort: 'First Author / Software / Data Curation',
    tools: ['Python', 'NLP', 'DistilBERT', 'BERT', 'RoBERTa', 'Google Colab'],
    hook: 'Researching how NLP can support early mental-health screening responsibly.',
    cardHook: 'A published NLP study on early screening support, model trade-offs, and AI limits.',
    cover: './assets/proj-mentalhealth.png',
    coverPosition: 'center top',
    link: 'https://www.sciencedirect.com/science/article/pii/S187705092502736X',
    linkLabel: 'View Paper',
    recognition: 'Presented and published at ICCSCI 2025',
    evidenceLabel: 'Impact',
    evidenceShort: 'Published and presented at ICCSCI 2025 with author and presenter recognition.',
    story:
      'This was my first research paper and one of the most meaningful milestones in my Computer Science journey. Because the topic involved mental-health-related text, it pushed me to think carefully about responsible AI, ethical boundaries, and how to communicate limitations clearly.',
    built:
      'We conducted a study comparing DistilBERT, BERT, and RoBERTa for multiclass mental-health text classification using social media data. The work focused on dataset preparation, model comparison, and analysis of accuracy and efficiency trade-offs for early screening support.',
    roleDetail:
      'As first author, I led software work, data curation, formal analysis, and writing. I helped prepare the dataset, run the experiments, interpret the results, and present the findings with appropriate caution about what the models can and cannot do.',
    evidence: [
      'Compared DistilBERT, BERT, and RoBERTa for multiclass mental-health text classification',
      'Used a curated social-media-sourced dataset for research and early screening support',
      'Presented and published at ICCSCI 2025 with Author and Oral Presenter recognition',
    ],
    learned:
      'I learned that responsible AI is not only about accuracy. It also requires efficiency awareness, ethical boundaries, and honest explanation of limitations. This kind of model can support research and early screening workflows, but it does not provide professional diagnosis.',
    gallery: [
      { src: './assets/gal-mentalhealth-1.png', alt: 'Mental Health NLP research model comparison' },
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
    hook: 'Testing a product idea with real customers, pricing, and operational constraints.',
    cardHook: 'An entrepreneurship project focused on market validation, customer response, and execution.',
    cover: './assets/proj-ubee.png',
    coverPosition: 'center',
    link: 'https://drive.google.com/drive/folders/1Xma9DIabwkqjiLSkIODo_Sx7qLY7gUlO',
    linkLabel: 'View Documentation',
    evidenceLabel: 'Impact',
    evidenceShort: '41 respondents / 60+ portions sold / Rp2.11M revenue.',
    metrics: [
      { value: '41', label: 'Respondents' },
      { value: '60+', label: 'Portions sold' },
      { value: 'Rp2.110.000', label: 'Revenue' },
      { value: 'Rp660.741', label: 'Net profit' },
    ],
    story:
      'UBEE was an entrepreneurship and market-validation project built around a local purple sweet potato product. It mattered because it moved the team from a product idea into real customer feedback, sales, pricing decisions, and operational learning.',
    built:
      'We developed a small food product with positioning, pricing, branding, and a value proposition aimed at young consumers. The project combined survey research with actual selling so our decisions were grounded in customer response rather than assumptions.',
    roleDetail:
      'As CEO and team leader, I guided the product concept, target market, business direction, team coordination, and market validation process. I helped keep the team aligned while balancing customer interest, cost, consistency, and operational readiness.',
    evidence: [
      'Collected 41 survey responses to inform product direction',
      'Sold 60+ portions to real customers during validation',
      'Recorded Rp2.110.000 revenue and Rp660.741 net profit',
    ],
    learned:
      'I learned that a good idea still needs evidence. Market validation requires real customers, real constraints, and practical trade-offs between desirability, feasibility, cost, and consistency.',
    gallery: [
      { src: './assets/gal-ubee-1.png', alt: 'UBEE product' },
      { src: './assets/gal-ubee-2.png', alt: 'UBEE branding and sales documentation' },
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
    hook: 'Building AI-assisted verification workflows that keep evidence reviewable.',
    cardHook: 'A hackathon system where AI supports document extraction while rules and people verify.',
    cover: './assets/proj-veritrace.png',
    coverPosition: 'center top',
    link: 'https://github.com/RickyRudiansyah/ComplyScope',
    linkLabel: 'View GitHub',
    evidenceLabel: 'Impact',
    evidenceShort: 'Microsoft hackathon project with AI extraction and deterministic validation.',
    story:
      'VeriTrace changed how I think about AI in practical workflows. In a verification context, being intelligent is not enough; the system also needs to be traceable, explainable, and reviewable by the people responsible for the final decision.',
    built:
      'VeriTrace helps QA, warehouse, and procurement teams review incoming material documents by comparing COA, Material Label, and approved master data. AI supports document extraction and explanation, while deterministic rules calculate validation results, risk scoring, and verification history for audit.',
    roleDetail:
      'As a full-stack developer, I worked across the React frontend, FastAPI backend, validation logic, risk engine, SQLite data layer, and user interface. I helped connect Azure Document Intelligence outputs with deterministic verification rules so results remain explainable and reviewable.',
    evidence: [
      'Extracts and compares COA, Material Label, and approved master data',
      'Uses field validation, risk scoring, decision support, and stored verification history',
      'Combines Azure Document Intelligence with deterministic rules and human review for final verification',
    ],
    learned:
      'I learned that responsible AI in practical workflows should make evidence easier to inspect, reduce review friction, and support better decisions without taking final judgment away from humans.',
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
