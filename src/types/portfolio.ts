// ─────────────────────────────────────────────────────────────────────────────
// types/portfolio.ts
// ─────────────────────────────────────────────────────────────────────────────

export type ProcessStep = {
  num: string;
  step: string;
  text: string;
};

// ── Research + Key Insights (combined section) ────────────────────────────────
export type ResearchSection = {
  primary: {
    description: string; // who we spoke to and how
    observations: string[]; // key observations from that session
  };
  secondary: {
    sources: string[]; // list of source types reviewed
    stats: {
      figure: string; // e.g. "210,000"
      label: string; // e.g. "estimated caregivers in Singapore"
    }[];
  };
};

// ── Goal (replaces Solution Overview) ────────────────────────────────────────
export type ProjectGoal = {
  statement: string; // the main goal paragraph
  measures: string[]; // how success is measured
};

// // ── Key Features ──────────────────────────────────────────────────────────────
// export type KeyFeature = {
//   icon: string;
//   title: string;
//   desc?: string;
//   subtitle?: string;
//   items: string[];
// };

export type KeyFeature = {
  title: string;
  subtitle?: string;
  items: string[];
};

// ── Design Decisions ──────────────────────────────────────────────────────────
export type DesignDecision = {
  title: string;
  body: string;
  /** Optional: what you considered but didn't do, and why */
  rationale?: string;
};

// ── Key Screens ───────────────────────────────────────────────────────────────
export type KeyScreen = {
  title: string;
  description: string;
  /** Relative path to image, e.g. "/images/carenest-home.png" */
  image?: string;
  badge?: string;
};

// ── Insights → Opportunities ──────────────────────────────────────────────────
export type MeaningfulOpportunity = {
  /** Short label for the insight theme, e.g. "Cognitive Offloading" */
  label: string;
  insight: string;
  /** Short label for the opportunity theme, e.g. "Unified Care Hub" */
  opportunityLabel: string;
  opportunity: string;
  icon?: string;
};

// ── Reflection ────────────────────────────────────────────────────────────────
export type ReflectionItem = {
  heading: string;
  body: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// Master CaseStudy type
// ─────────────────────────────────────────────────────────────────────────────
export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags?: string[];
  lead: string;
  coverColor: string;

  // Overview
  problem: string;
  goal: string;
  whyItMatters: string;

  // Process
  processSteps: ProcessStep[];

  // Research + Key Insights (one section)
  research?: ResearchSection;

  // Insights → Opportunities
  meaningfulOpportunities?: MeaningfulOpportunity[];

  // Goal
  projectGoal?: ProjectGoal;

  // Features
  keyFeatures?: KeyFeature[];

  // Design (expanded)
  designDecisions?: DesignDecision[];

  // Screens
  keyScreens?: KeyScreen[];

  // Reflection
  reflection?: ReflectionItem[];
};

// ─────────────────────────────────────────────────────────────────────────────
// Job types
// ─────────────────────────────────────────────────────────────────────────────
export type JobHighlight = {
  num: string;
  label: string;
};

export type Job = {
  period: string;
  title: string;
  client: string;
  desc: string;
  contributions: string[];
  chips: string[];
  highlights: JobHighlight[];
  active: boolean;
};
