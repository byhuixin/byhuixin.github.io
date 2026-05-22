import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { caseStudies } from "../data/portfolio";
import { useBlobVisibility } from "../hooks/useBlobVisibility";
import {
  HeroIllustration,
  OnboardingFirst,
  OnboardingFourth,
  OnboardingSecond,
  OnboardingThird,
  OnboardingFifth,
  AddTaskFirst,
  AddTaskSecond,
  AddTaskThird,
  AddTaskFourth,
  AddMedFirst,
  AddMedSecond,
  AddMedThird,
} from "../components/CareNestIllustrations";
import { ScreenPrototype } from "../components/ScreenPrototype";

// Replace the screenComponents map at the top of CaseStudyPage.tsx
const flowScreens = {
  onboarding: [
    {
      title: "Welcome",
      badge: "Onboarding · 1 of 5",
      description:
        "A simple entry point for caregivers to create an account or return to an existing care setup.",
      component: OnboardingFirst,
    },

    {
      title: "Create Account",
      badge: "Onboarding · 2 of 5",
      description:
        "New users create their account to begin setting up and managing collaborative care.",
      component: OnboardingSecond,
    },

    {
      title: "Care Setup",
      badge: "Onboarding · 3 of 5",
      description:
        "Caregivers can either join an existing care team or create a new care recipient profile to begin coordinating care.",
      component: OnboardingThird,
    },

    {
      title: "Create Care Recipient",
      badge: "Onboarding · 4 of 5",
      description:
        "Set up a care recipient profile to establish the foundation for shared caregiving, task management, and medical tracking.",
      component: OnboardingFourth,
    },

    {
      title: "Ready to Begin",
      badge: "Onboarding · 5 of 5",
      description:
        "Confirmation that the care setup is complete, with direct access to the shared caregiving dashboard.",
      component: OnboardingFifth,
    },
  ],
  tasks: [
    {
      title: "Getting Started",
      badge: "Daily Flow · 1 of 4",
      description:
        "A calm empty state that helps new caregivers begin setting up tasks, medications, and appointments from one central dashboard.",
      component: AddTaskFirst,
    },

    {
      title: "Choose Task Type",
      badge: "Daily Flow · 2 of 4",
      description:
        "Caregivers can quickly add a care task, medication, vitals log, or appointment from one unified entry point.",
      component: AddTaskSecond,
    },

    {
      title: "Create Task",
      badge: "Daily Flow · 3 of 4",
      description:
        "Simple task creation flow with clear inputs for scheduling, assignment, and care details.",
      component: AddTaskThird,
    },

    {
      title: "Task Added",
      badge: "Daily Flow · 4 of 4",
      description:
        "The dashboard updates instantly with a success message, giving caregivers immediate visibility of the newly added task.",
      component: AddTaskFourth,
    },
  ],
  medication: [
    {
      title: "Medication Home",
      badge: "Medication · 1 of 3",
      description: "Overview of all medications.",
      component: AddMedFirst,
    },
    {
      title: "Add Medication",
      badge: "Medication · 2 of 3",
      description:
        "Enter medication details including name, dosage, type, and frequency. Inline selectors keep the form quick and structured.",
      component: AddMedSecond,
    },
    {
      title: "Medication Added",
      badge: "Medication · 3 of 3",
      description:
        "Returns to medication home with a success confirmation. Newly added medication is now visible in the list.",
      component: AddMedThird,
    },
  ],
};

export const CaseStudyPage = (): JSX.Element => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cs = caseStudies.find((item) => item.slug === slug);

  useBlobVisibility();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cs) {
    return (
      <div className="page" style={{ padding: "120px 0", textAlign: "center" }}>
        <p>Case study not found.</p>
        <button
          type="button"
          className="btn btn--primary"
          style={{ marginTop: "1rem" }}
          onClick={() => navigate("/#portfolio")}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="page cs-page">
      {/* ─────────────────────────────────────────────
          HERO — full-bleed atmosphere
      ───────────────────────────────────────────── */}
      <div
        className="cs-hero"
        style={{ "--cs-cover-color": cs.coverColor } as React.CSSProperties}
      >
        <div className="cs-hero__backdrop" aria-hidden="true" />
        <div className="container cs-hero__inner">
          {/* <button
            type="button"
            className="back-btn cs-hero__back"
            onClick={() => navigate("/#portfolio")}
            aria-label="Back to portfolio"
          >
            <ArrowLeftIcon />
            <span>Back</span>
          </button> */}

          <div className="cs-hero__layout">
            <div className="cs-hero__text">
              <div className="cs-hero__meta">
                {cs.tags?.map((tag) => (
                  <span key={tag} className="cs-hero__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="cs-hero__title">{cs.title}</h1>
              <p className="cs-hero__lead">{cs.lead}</p>
            </div>

            {/* Decorative illustration — only for carenest */}
            {cs.slug === "carenest" && (
              <div className="cs-hero__visual" aria-hidden="true">
                <HeroIllustration />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          PROCESS STRIP — visual timeline
      ───────────────────────────────────────────── */}
      {/* {cs.processSteps && (
        <section className="cs-process-strip">
          <div className="container">
            <div className="cs-process-inner">
              <span className="cs-process-label">Design Process</span>
              <ProcessFlowSVG />
            </div>
          </div>
        </section>
      )} */}

      {/* ─────────────────────────────────────────────
          FRAMING — Problem / Why / Goal
      ───────────────────────────────────────────── */}
      <section className="cs-framing section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--exp-1" />
        </div>
        <div className="container">
          <div className="cs-framing__top">
            <div className="cs-framing__problem">
              <span className="cs-eyebrow">The Problem</span>
              <p className="cs-framing__problem-text">{cs.problem}</p>
            </div>
            <div className="cs-framing__goal">
              <span className="cs-eyebrow">The Goal</span>
              <p className="cs-framing__body">{cs.goal}</p>
            </div>
          </div>

          <div className="cs-framing__why">
            <div className="cs-framing__why-left">
              <span className="cs-eyebrow">Why It Matters</span>
              <p className="cs-framing__why-body">{cs.whyItMatters}</p>
            </div>
            <div className="cs-framing__why-stats">
              <div className="cs-framing__stat">
                <span className="cs-framing__stat-num">900K+</span>
                <span className="cs-framing__stat-label">
                  caregivers in Singapore
                </span>
              </div>
              <div className="cs-framing__stat">
                <span className="cs-framing__stat-num">1 in 4</span>
                <span className="cs-framing__stat-label">
                  families in the sandwich generation
                </span>
              </div>
              <div className="cs-framing__stat">
                <span className="cs-framing__stat-num">60%</span>
                <span className="cs-framing__stat-label">
                  report caregiver burnout
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          RESEARCH
      ───────────────────────────────────────────── */}
      {cs.research && (
        <section className="cs-research section-wrapper">
          <div className="blob-layer" aria-hidden="true">
            <div className="blob blob--about-1" />
          </div>
          <div className="container">
            <div className="cs-section-header">
              <span className="cs-eyebrow">Research & Key Insights</span>
              <h2 className="cs-section-title">What we found</h2>
            </div>

            {/* Primary */}
            <div className="cs-research-primary">
              <div className="cs-research-primary__label">
                <span className="cs-pillar-label">Primary Research</span>
                <p className="cs-research-primary__desc">
                  {cs.research.primary.description}
                </p>
              </div>
              <div className="cs-research-primary__observations">
                {cs.research.primary.observations.map((obs, i) => (
                  <div key={obs} className="cs-observation">
                    <span className="cs-observation__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="cs-observation__text">{obs}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary */}
            <div className="cs-research-secondary">
              <div className="cs-research-secondary__header">
                <span className="cs-pillar-label">Secondary Research</span>
                <ul className="cs-sources">
                  {cs.research.secondary.sources.map((src) => (
                    <li key={src} className="cs-source">
                      {src}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat strip — enhanced with visual indicators */}
              <div className="cs-stat-strip">
                {cs.research.secondary.stats.map((stat, i) => (
                  <div key={stat.label} className="cs-stat">
                    {/* Mini bar visual */}

                    <span className="cs-stat__figure">{stat.figure}</span>
                    <span className="cs-stat__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────
          INSIGHTS → OPPORTUNITIES
      ───────────────────────────────────────────── */}
      {cs.meaningfulOpportunities && (
        <section className="cs-opportunities section-wrapper">
          <div className="blob-layer" aria-hidden="true">
            <div className="blob blob--contact-1" />
          </div>
          <div className="container">
            <div className="cs-section-header">
              <span className="cs-eyebrow">From Research to Design</span>
              <h2 className="cs-section-title">
                Insights that shaped the solution
              </h2>
              <p className="cs-section-desc">
                Research uncovered four core caregiver needs that shaped the
                direction of CareNest, guiding how insights were translated into
                meaningful design opportunities
              </p>
            </div>

            <div className="cs-opp-list">
              {cs.meaningfulOpportunities.map((item, i) => (
                <div key={item.label} className="cs-opp-row">
                  <span className="cs-opp-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="cs-opp-insight">
                    <span className="cs-opp-pill cs-opp-pill--insight">
                      Insight
                    </span>
                    {item.label && <p className="cs-opp-theme">{item.label}</p>}
                    <p className="cs-opp-text">{item.insight}</p>
                  </div>

                  <div className="cs-opp-connector" aria-hidden="true">
                    <span className="cs-opp-arrow">→</span>
                  </div>

                  <div className="cs-opp-opportunity">
                    <span className="cs-opp-pill cs-opp-pill--opp">
                      Opportunity
                    </span>
                    {item.opportunityLabel && (
                      <p className="cs-opp-theme cs-opp-theme--opp">
                        {item.opportunityLabel}
                      </p>
                    )}
                    <p className="cs-opp-text cs-opp-text--strong">
                      {item.opportunity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────
          GOAL
      ───────────────────────────────────────────── */}
      {cs.projectGoal && (
        <section className="cs-goal section-wrapper">
          <div className="blob-layer" aria-hidden="true">
            <div className="blob blob--about-2" />
          </div>
          <div className="container">
            <div className="cs-goal__inner">
              <span className="cs-eyebrow">The Goal</span>
              <h2 className="cs-section-title">What we aim to solve</h2>
              <blockquote className="cs-goal__statement">
                {cs.projectGoal.statement}
              </blockquote>
              {/* <div className="cs-goal__measures">
                <span className="cs-pillar-label">Success looks like</span>
                <div className="cs-goal__measure-list">
                  {cs.projectGoal.measures.map((m, i) => (
                    <div key={m} className="cs-goal__measure">
                      <span className="cs-goal__measure-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="cs-goal__measure-text">{m}</p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </section>
      )}

      {cs.keyFeatures && (
        <section className="cs-features section-wrapper">
          <div className="blob-layer" aria-hidden="true">
            <div className="blob blob--portfolio-1" />
          </div>
          <div className="container">
            <div className="cs-section-header">
              <span className="cs-eyebrow">Key Features</span>
              <h2 className="cs-section-title">
                Designed around the realities of caregiving
              </h2>
            </div>

            <div className="cs-features-grid">
              {cs.keyFeatures.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`cs-feature cs-feature--${i + 1}`}
                >
                  <div className="cs-feature__top">
                    <span className="cs-feature__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="cs-feature__title">{feature.title}</p>
                    {feature.subtitle && (
                      <p className="cs-feature__subtitle">{feature.subtitle}</p>
                    )}
                  </div>
                  <ul className="cs-feature__list">
                    {feature.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────
          KEY SCREENS — Phone mockups
      ───────────────────────────────────────────── */}
      {cs.keyScreens && (
        <section className="cs-screens section-wrapper">
          <div className="blob-layer" aria-hidden="true">
            <div className="blob blob--about-1" />
          </div>
          <div className="container">
            <div className="cs-section-header">
              <span className="cs-eyebrow">Key Screens</span>
              <h2 className="cs-section-title">The design</h2>
              <p className="cs-section-desc">
                Tap through each flow to see how the app guides caregivers from
                setup to daily use.
              </p>
            </div>

            <div className="cs-flows">
              <div className="cs-flow">
                <div className="cs-flow__label">
                  <span className="cs-eyebrow">Flow 01</span>
                  <h3>Onboarding &amp; care team setup</h3>
                </div>
                <ScreenPrototype
                  screens={flowScreens.onboarding}
                  flowId="onboarding"
                />
              </div>

              <div className="cs-flow">
                <div className="cs-flow__label">
                  <span className="cs-eyebrow">Flow 02</span>
                  <h3>Daily dashboard &amp; Add care task</h3>
                </div>
                <ScreenPrototype screens={flowScreens.tasks} flowId="tasks" />
              </div>

              <div className="cs-flow">
                <div className="cs-flow__label">
                  <span className="cs-eyebrow">Flow 03</span>
                  <h3>Add new medication</h3>
                </div>
                <ScreenPrototype
                  screens={flowScreens.medication}
                  flowId="medication"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {/* ─────────────────────────────────────────────
          DESIGN DECISIONS
      ───────────────────────────────────────────── */}
      {cs.designDecisions && (
        <section className="cs-decisions section-wrapper">
          <div className="blob-layer" aria-hidden="true">
            <div className="blob blob--contact-2" />
          </div>
          <div className="container">
            <div className="cs-section-header">
              <span className="cs-eyebrow">Design Decisions</span>
              <h2 className="cs-section-title">
                The thinking behind the design
              </h2>
            </div>

            <div className="cs-decision-list">
              {cs.designDecisions.map((d, i) => (
                <div key={d.title} className="cs-decision">
                  <div className="cs-decision__head">
                    <span className="cs-decision__num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="cs-decision__title">{d.title}</h3>
                  </div>

                  <div className="cs-decision__body-wrap">
                    <div className="cs-decision__body">
                      <p>{d.body}</p>
                    </div>
                    {d.rationale && (
                      <div className="cs-decision__rationale">
                        <span className="cs-pillar-label">
                          Why not otherwise
                        </span>
                        <p>{d.rationale}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────
          REFLECTION
      ───────────────────────────────────────────── */}
      {cs.reflection && (
        <section className="cs-reflection section-wrapper">
          <div className="blob-layer" aria-hidden="true">
            <div className="blob blob--hero-2" />
          </div>
          <div className="container">
            <div className="cs-section-header">
              <span className="cs-eyebrow">Reflection</span>
              <h2 className="cs-section-title">What I took away</h2>
            </div>

            <div className="cs-reflection__list">
              {cs.reflection.map((r, i) => (
                <div key={r.heading} className="cs-reflection__item">
                  <span className="cs-reflection__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="cs-reflection__content">
                    <p className="cs-reflection__heading">{r.heading}</p>
                    <p className="cs-reflection__body">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
