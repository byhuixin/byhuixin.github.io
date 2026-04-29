import type { CaseStudy, Job } from "../types/portfolio";

export const caseStudies: CaseStudy[] = [
  {
    slug: "carenest",
    title: "CareNest",
    subtitle: "Collaborative Caregiving Platform",
    tags: ["UX Research", "UI Design", "Mobile"],
    lead:
      "CareNest is a collaborative platform that helps home-based caregivers stay connected and organised. From daily care tasks to tracking medication and appointments, everything lives in one simple, shared space.",
    coverColor: "#DCCFC1",
    problem:
      "Family caregiving in Singapore is often fragmented and stressful, particularly for 'sandwich generation' families balancing caregiving with careers, children and aging parents.",
    goal:
      "To design a mobile solution that centralises care coordination, enables shared tracking across family members, and reduces the mental load of daily caregiving.",
    whyItMatters:
      "As caregiving in Singapore becomes increasingly complex, it places growing pressure on families to coordinate care efficiently. Aging population is increasing caregiving demands. Care is shared but lacks structure and coordination. Fragmented tools create overload, errors and stress — ultimately impacting both quality of care and wellbeing of caregivers.",
    screens: [
      { label: "Screen 1 — Onboarding" },
      { label: "Screen 2 — Home" },
      { label: "Screen 3 — Detail" },
    ],
    insights: [
      "Replace with a real finding that shaped a design decision.",
      "What surprised you? What did users say you didn't expect?",
      "What technical or business constraint did you design around?",
    ],
    outcomes: [
      "e.g. Task completion rate improved by X%",
      "e.g. Reduced drop-off at step X",
      "e.g. Positive usability test feedback",
    ],
    processSteps: [
      {
        num: "01",
        step: "Research",
        text: "User interviews · Competitive audit · Affinity mapping",
      },
      {
        num: "02",
        step: "Define",
        text: "Personas · Problem statements · User journey map",
      },
      {
        num: "03",
        step: "Ideate",
        text: "Sketches · Wireframes · Information architecture",
      },
      {
        num: "04",
        step: "Design",
        text: "High-fidelity UI · Design system · Interactions",
      },
      {
        num: "05",
        step: "Test",
        text: "Usability testing · Iteration · Handoff",
      },
    ],
  },
];

export const jobs: Job[] = [
  {
    period: "Feb 2022 - Jun 2025",
    title: "Software Development Consultant",
    client: "FDM Group",
    desc: "Placed as a consultant across multiple client engagements, contributing to financial technology products and mobile applications. Bridged development and design by translating business requirements into user-facing features across banking and fintech domains.",
    chips: [],
    highlights: [
      { num: "3+", label: "Years" },
      { num: "2", label: "Clients" },
    ],
    active: true,
  },
  {
    period: "Jul 2023 – Apr 2025",
    title: "Mobile Developer",
    client: "FDM • OCBC",
    desc: "Built and refined banking onboarding and loan application flows, translating wireframes and product requirements into production-ready interfaces, combining technical implementation with a focus on multi-step journeys, validation, and clear user guidance.",
    chips: ["React Native", "TypeScript", "Kotlin", "REST APIs"],
    highlights: [],
    active: false,
  },
  {
    period: "Jun 2022 – Jun 2023",
    title: "Full Stack Developer",
    client: "FDM • DBS",
    desc: "Developed data-driven web interfaces for FX portfolios, improving how complex financial data is structured, displayed and interacted with through responsive tables and dashboards.",
    chips: ["Java", "Spring Boot", "WebSocket", "Kafka", "AG Grid"],
    highlights: [],
    active: false,
  },
  {
    period: "Feb 2022 – May 2022",
    title: "Software Developer Trainee",
    client: "FDM Group",
    desc: "Built full-stack applications using Java and Spring Boot, developing a strong foundation in system design, APIs and how backend services support seamless and reliable front-end experiences.",
    chips: ["Java", "SQL", "Spring Boot"],
    highlights: [],
    active: false,
  },
];
