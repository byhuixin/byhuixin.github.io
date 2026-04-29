export type ProcessStep = {
  num: string;
  step: string;
  text: string;
};

export type CaseStudyScreen = {
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  lead: string;
  coverColor: string;
  problem: string;
  goal: string;
  whyItMatters: string;
  screens: CaseStudyScreen[];
  insights: string[];
  outcomes: string[];
  processSteps: ProcessStep[];
};

export type JobHighlight = {
  num: string;
  label: string;
};

export type Job = {
  period: string;
  title: string;
  client: string;
  desc: string;
  chips: string[];
  highlights: JobHighlight[];
  active: boolean;
};
