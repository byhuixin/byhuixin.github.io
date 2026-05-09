import type { CaseStudy, Job } from "../types/portfolio";

export const caseStudies: CaseStudy[] = [
  {
    slug: "carenest",
    title: "CareNest",
    subtitle: "Collaborative Caregiving Platform",
    lead: "A mobile platform that helps families coordinate home-based care — tasks, medications, and appointments in one shared space.",
    coverColor: "#DCCFC1",

    problem:
      "Family caregiving in Singapore is often fragmented and stressful, particularly for sandwich generation families balancing caregiving with careers, children and aging parents",
    goal: "Design a mobile solution that centralises care coordination, enables shared tracking across family members, and reduces the mental load of daily caregiving",
    whyItMatters:
      "As Singapore's population ages, caregiving is becoming increasingly complex, placing growing pressure on families to coordinate care effectively. Yet care is often shared without clear structure, relying on fragmented tools and ultimately impacting both the quality of care and caregivers' wellbeing.",

    processSteps: [
      {
        num: "01",
        step: "Research",
        text: "Interviews · Secondary research · Affinity mapping",
      },
      {
        num: "02",
        step: "Define",
        text: "Personas · Journey map · Problem framing",
      },
      { num: "03", step: "Ideate", text: "Sketches · Wireframes · IA" },
      { num: "04", step: "Design", text: "High-fidelity UI · Design system" },
      { num: "05", step: "Test", text: "Usability testing · Iteration" },
    ],

    // ── Research + Key Insights ───────────────────────────────────────────────
    research: {
      primary: {
        description:
          "Conducted an interview with a full-time caregiver to understand and explore caregiving workflows, tools used and emotional stress points.",
        observations: [
          "Uses multiple tools to manage care (HealthHub, alarms, paper calendar)",
          "Coordinates constantly with family members and a domestic helper, leading to repeated check-ins and miscommunication.",
          "Experiences high cognitive load from tracking tasks, schedules, and communication all at once.",
        ],
      },
      secondary: {
        sources: [
          "Academic reports on caregiver demographics and burden",
          "Studies on medication errors in home care",
          "Articles on caregiver burnout and coordination challenges",
        ],
        stats: [
          { figure: "210,000", label: "estimated caregivers in Singapore" },
          {
            figure: "62",
            label: "mean caregiver age — many are older adults themselves",
          },
          {
            figure: "42%",
            label: "of caregivers are also in full-time employment",
          },
          { figure: "6.8 hrs", label: "of care provided daily on average" },
          { figure: ">40%", label: "of caregivers are at risk of depression" },
        ],
      },
    },

    // ── Insights → Opportunities ──────────────────────────────────────────────
    meaningfulOpportunities: [
      {
        icon: "🧠",
        label: "Cognitive Offloading",
        insight:
          "Managing medications, vitals and daily tasks across multiple tools creates constant cognitive strain.",
        opportunityLabel: "Unified Care Hub",
        opportunity:
          "A single source of truth to reduce reliance on memory and scattered tracking.",
      },
      {
        icon: "👥",
        label: "Care Coordination",
        insight:
          "Care responsibilities are shared, but lack of visibility leads to confusion and missed tasks.",
        opportunityLabel: "Shared Care Tracking",
        opportunity:
          "Enable shared tracking and clear ownership so nothing falls through the cracks.",
      },
      {
        icon: "💊",
        label: "Medication Safety",
        insight:
          "Complex medication and care schedules create fear of missed or duplicated doses.",
        opportunityLabel: "Secure Confirmation",
        opportunity:
          "Structured workflows with reminders and action verification for peace of mind.",
      },
      {
        icon: "👆",
        label: "Calm Accessibility",
        insight:
          "Complex interfaces create friction and reduce usability in already high-stress situations.",
        opportunityLabel: "Adaptive One-Tap Design",
        opportunity:
          "Simplified interactions built for urgent and interrupted caregiving situations.",
      },
    ],

    // ── Goal ─────────────────────────────────────────────────────────────────
    projectGoal: {
      statement:
        "Our collaborative care management app will help caregivers centralize appointments, medical records, and daily care tasks in one place. By reducing reliance on fragmented tools, it aims to lower cognitive overload, improve coordination, and minimize errors in care.",

      measures: [
        "Higher rates of shared task completion across the care team",
        "Reduced caregiver stress levels through fewer coordination gaps",
      ],
    },

    // // ── Key Features ──────────────────────────────────────────────────────────
    // keyFeatures: [
    //   {
    //     icon: "🧡",
    //     title: "Care Team System",
    //     items: [
    //       "Invite-based onboarding — the care circle stays trusted and intentional",
    //       "Multiple caregivers assignable per recipient",
    //       "Clear role visibility prevents tasks from slipping through",
    //     ],
    //   },
    //   {
    //     icon: "📅",
    //     title: "Calendar & Timeline View",
    //     items: [
    //       "Daily and monthly views surface the rhythm of care at a glance",
    //       "Tasks and medications in one unified timeline",
    //       "Filterable by caregiver or recipient to reduce noise",
    //     ],
    //   },
    //   {
    //     icon: "➕",
    //     title: "Type-Based Task Creation",
    //     items: [
    //       "Choose a type first (Appointment, Medication, General) — smart defaults follow",
    //       "Context-aware pre-fill for time, recipient, and assignee",
    //       "Recurring task support for daily care routines",
    //     ],
    //   },
    //   {
    //     icon: "👤",
    //     title: "Care Recipient Profiles",
    //     items: [
    //       "Each recipient is the hub all tasks revolve around",
    //       "Colour-coded to distinguish multiple recipients instantly",
    //       "Full care team visibility for every member",
    //     ],
    //   },
    // ],
    // Replace the keyFeatures array in your portfolio.ts with this:

    // ── portfolio.ts — replace keyFeatures array ──────────────────────────────

    keyFeatures: [
      {
        title: "Centralization",
        subtitle: "One place for everything",
        items: [
          "Unified dashboard for appointments, medications, tasks and vitals",
          "Consolidates multiple caregiving tools in one platform",
        ],
      },
      {
        title: "Collaboration",
        subtitle: "Care shared, not scattered",
        items: [
          "Shared task tracking for family members and helpers",
          "Real-time updates and clear task ownership",
        ],
      },
      {
        title: "Accuracy",
        subtitle: "Nothing falls through",
        items: [
          "Medication reminders, dosage tracking and appointment alerts",
          "Reduces risks of missed or duplicated tasks",
        ],
      },
      {
        title: "Accessibility",
        subtitle: "Built for everyone",
        items: [
          "Simple, intuitive interface",
          "Clear navigation and readable layouts for ease of use",
        ],
      },
      {
        title: "Confidence",
        subtitle: "Always in the loop",
        items: [
          "Care logs and task history to provide greater visibility into upcoming and past responsibilities",
          "Helps caregivers stay informed and feel in control",
        ],
      },
    ],
    // ── Design Decisions ──────────────────────────────────────────────────────
    designDecisions: [
      {
        title: "Recipient-anchored colour system",
        body: "Colour is tied to the care recipient — the emotional and logistical centre of the app. In households with multiple recipients, this ensures every task, event, and notification is instantly attributable to the right person without reading a label.",
        rationale:
          "Colouring by caregiver was considered but quickly discarded: caregivers rotate, but the recipient is fixed. Anchoring colour to the recipient scales cleanly and feels more intuitive.",
      },
      {
        title: "Type-based task creation",
        body: "Rather than a blank form, users choose a task type first — Appointment, Medication, or General. Each type loads a tailored set of fields with smart defaults already filled in. This collapses the time-to-add significantly and prevents the cognitive stall of a blank slate.",
        rationale:
          "An open-ended form was prototyped first. Testing showed users hesitated at blank fields and frequently skipped optional context. Typed creation moves the decision upstream to a single choice, then handles the rest.",
      },
      {
        title: "Context-aware smart defaults",
        body: "Opening the add-task flow from a calendar date pre-fills that date. Opening it from a recipient profile pre-selects that recipient. The system infers intent from context — every tap saved matters when a caregiver is mid-routine.",
        rationale:
          "Observed during interviews: caregivers often open a tool at the exact moment they need to log something. Pre-filling from context removes the friction of re-entering information they've already implicitly communicated.",
      },
      {
        title: "Overlay quick actions over new screens",
        body: "Mark done, reassign, reschedule — all surface as contextual overlays rather than navigating to a new screen. For time-sensitive care moments, the interaction cost of a full page transition is too high.",
        rationale:
          "Navigation to a detail screen was tested. It felt right for desktop-style workflows but wrong for a caregiver mid-routine. Overlays keep the current context visible while completing the action.",
      },
      {
        title: "Caregiver vs recipient as separate identities",
        body: "The care recipient is never conflated with the caregiver in the data model. Every task, event, and profile is scoped to a recipient first, then assigned to a caregiver. This distinction keeps the UI unambiguous and allows the platform to scale to households with multiple recipients and rotating helpers.",
        rationale:
          "Early wireframes blurred this boundary. When a caregiver could also appear as a care recipient (common in elderly households), the model broke down. Separating the concepts explicitly solved this and made the permission model simpler.",
      },
    ],

    // ── Key Screens ───────────────────────────────────────────────────────────
    keyScreens: [
      {
        title: "Dashboard",
        description:
          "Today's tasks, upcoming events, and a quick-add shortcut. The empty state guides new users to their first action without overwhelming them.",
        badge: "Home",
        image: undefined,
      },
      {
        title: "Calendar / Timeline View",
        description:
          "All scheduled care events across the team in one timeline — filterable by recipient or caregiver. Built to mirror how caregivers naturally plan their day.",
        badge: "Schedule",
        image: undefined,
      },
      {
        title: "Add Task Flow",
        description:
          "Type selection → context-aware form. Smart pre-fills reduce input to the minimum needed. Supports one-off and recurring tasks.",
        badge: "Add Task",
        image: undefined,
      },
      {
        title: "Care Recipient Profile",
        description:
          "A hub per recipient: upcoming tasks, care team, pinned notes. Colour-coded to distinguish multiple recipients at a glance.",
        badge: "Profile",
        image: undefined,
      },
      {
        title: "Onboarding & Join Care Team",
        description:
          "Invite-based flow. New members join via link and land directly in the shared care context — no lengthy setup.",
        badge: "Onboarding",
        image: undefined,
      },
    ],

    // ── Reflection ────────────────────────────────────────────────────────────
    reflection: [
      {
        heading:
          "Shared responsibility is a coordination problem, not a motivation problem",
        body: "Early assumptions suggested caregivers needed reminders because they forgot. Research showed the real issue was structural — no shared visibility meant effort was duplicated or dropped entirely. Fixing coordination fixed the problem. That reframe shaped every major design decision.",
      },
      {
        heading:
          "Designing for multiple users at once is fundamentally different",
        body: "CareNest required holding multiple perspectives simultaneously — primary caregiver, secondary caregiver, care recipient — and ensuring the system served all three. That demanded careful thought around information hierarchy and shared state in a way single-user apps simply don't require.",
      },
      {
        heading: "Emotional weight shapes design decisions",
        body: "Caregiving carries guilt, love, exhaustion and relief. Designing with that reality in mind meant prioritising reassurance through clear confirmation states, reducing friction at high-stress moments, and never making caregivers feel like they'd failed when something was missed.",
      },
    ],
  },
];

export const jobs: Job[] = [
  {
    period: "Feb 2022 - Jun 2025",
    title: "Software Development Consultant",
    client: "FDM Group",
    desc: "Placed as a consultant across multiple client engagements, contributing to financial technology products and mobile applications.",
    contributions: [
      "Served two client placements across OCBC and DBS over three years.",
      "Bridged development and design by translating wireframes and requirements into production-ready features.",
      "Maintained close collaboration with product and design teams to ship user-facing work on time.",
    ],
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
    desc: "Built and refined banking onboarding and loan application flows in React Native and Kotlin.",
    contributions: [
      "Developed onboarding and loan application screens in React Native and Kotlin.",
      "Implemented form validation, error states, and step-by-step navigation patterns.",
      "Worked directly from Figma wireframes, flagging feasibility concerns early.",
      "Contributed to a design system used across multiple product teams.",
    ],
    chips: ["React Native", "TypeScript", "Kotlin", "REST APIs"],
    highlights: [],
    active: false,
  },
  {
    period: "Jun 2022 – Jun 2023",
    title: "Full Stack Developer",
    client: "FDM • DBS",
    desc: "Developed data-driven web interfaces for FX portfolios — responsive tables and dashboards with real-time data.",
    contributions: [
      "Built responsive FX portfolio dashboards using AG Grid with real-time data via WebSocket.",
      "Integrated Kafka streams for live rate updates with sub-second latency.",
      "Designed RESTful APIs in Spring Boot consumed by front-end dashboards.",
    ],
    chips: ["Java", "Spring Boot", "WebSocket", "Kafka", "AG Grid"],
    highlights: [],
    active: false,
  },
  {
    period: "Feb 2022 – May 2022",
    title: "Software Developer Trainee",
    client: "FDM Group",
    desc: "Built full-stack applications with Java and Spring Boot.",
    contributions: [
      "Built CRUD applications with Java, Spring Boot, and SQL from scratch.",
      "Learned REST API design, MVC patterns, and relational database modelling.",
      "Delivered a capstone project assessed by senior engineers.",
    ],
    chips: ["Java", "SQL", "Spring Boot"],
    highlights: [],
    active: false,
  },
];
