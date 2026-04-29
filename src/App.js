import React from "react";
import "./index.css";

// ─────────────────────────────────────────────
// CASE STUDY DATA
// Add more case studies here — the portfolio
// overview page renders them automatically.
// ─────────────────────────────────────────────
const caseStudies = [
  {
    slug: "carenest",
    title: "CareNest",
    subtitle: "Collaborative Caregiving Platform",
    tags: ["UX Research", "UI Design", "Mobile"],
    lead: "CareNest is a collaborative platform that helps home-based caregivers stay connected and organised. From daily care tasks to tracking medication and appointments, everything lives in one simple, shared space.",
    coverColor: "#DCCFC1", // placeholder until you add real images
    problem:
      "Family caregiving in Singapore is often fragmented and stressful, particularly for 'sandwich generation' families balancing caregiving with careers, children and aging parents.",
    goal: "To design a mobile solution that centralises care coordination, enables shared tracking across family members, and reduces the mental load of daily caregiving.",
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
  // ── Add more case studies here ──
  // {
  //   slug: "my-next-project",
  //   title: "Project Name",
  //   subtitle: "Short tagline",
  //   tags: ["Tag1", "Tag2"],
  //   lead: "...",
  //   coverColor: "#C6C9D2",
  //   problem: "...",
  //   goal: "...",
  //   whyItMatters: "...",
  //   screens: [...],
  //   insights: [...],
  //   outcomes: [...],
  //   processSteps: [...],
  // },
];

// ─────────────────────────────────────────────
// EXPERIENCE DATA
// ─────────────────────────────────────────────
const jobs = [
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

// ─────────────────────────────────────────────
// SHARED ICON
// ─────────────────────────────────────────────
const ChevronIcon = () => (
  <svg
    className="exp-chevron"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
const Navigation = ({ navigate, currentPage }) => {
  const isHome = currentPage === "home";

  const goHome = (e) => {
    e.preventDefault();
    navigate("home");
  };

  const handleAnchor = (e, hash) => {
    e.preventDefault();
    if (!isHome) {
      navigate("home", hash);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="nav">
      <div className="nav__container container">
        {/* Logo — always goes home */}
        <a href="#home" className="nav__logo" onClick={goHome}>
          Portfolio
        </a>

        <ul className="nav__menu">
          {/* "Work" navigates to the portfolio overview page */}
          <li>
            <button
              className="nav__link nav__link--btn"
              onClick={() => navigate("portfolio")}
            >
              Works
            </button>
          </li>
          {/* Anchor links — work from any page */}
          {[
            { label: "About", hash: "#about" },
            { label: "Contact", hash: "#contact" },
          ].map(({ label, hash }) => (
            <li key={label}>
              <a
                href={hash}
                className="nav__link"
                onClick={(e) => handleAnchor(e, hash)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
const Hero = ({ navigate }) => (
  <section id="home" className="hero section-wrapper">
    {/* Section-scoped blobs — positioned at edges, away from centre content */}
    <div className="blob-layer" aria-hidden="true">
      <div className="blob blob--hero-1" />
      <div className="blob blob--hero-2" />
    </div>

    <div className="container hero__content">
      <h1>Bridging development and design</h1>
      <p className="hero__description">
        With a background in software development, I design user-friendly
        experiences that balance real-world constraints with clarity and
        usability.
      </p>
      <div className="hero__cta">
        <button
          className="btn btn--primary"
          onClick={() => navigate("portfolio")}
        >
          View My Work
        </button>
        <a
          href="#contact"
          className="btn btn--secondary"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────
const Experience = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const [visibleRows, setVisibleRows] = React.useState({});
  const rowRefs = React.useRef([]);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = rowRefs.current.indexOf(e.target);
            if (idx !== -1)
              setVisibleRows((prev) => ({ ...prev, [idx]: true }));
          }
        }),
      { threshold: 0.15 },
    );
    rowRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="section section--alt section-wrapper">
      {/* Blobs pinned to far edges of the section */}
      <div className="blob-layer" aria-hidden="true">
        <div className="blob blob--exp-1" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <p className="sec-label">Work Experience</p>
        <h2>Experience</h2>

        <div className="exp-timeline">
          {jobs.map((job, index) => {
            const isOpen = openIndex === index;
            const isVisible = visibleRows[index];
            return (
              <div
                key={index}
                ref={(el) => (rowRefs.current[index] = el)}
                className={[
                  "exp-row",
                  job.active ? "active" : "",
                  isOpen ? "open" : "",
                  isVisible ? "visible" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="exp-dot" />
                <div className="exp-year">{job.period}</div>
                <div className="exp-body">
                  <div
                    className="exp-trigger"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(index);
                      }
                    }}
                  >
                    <div className="exp-head">
                      <span className="exp-title">{job.title}</span>
                      <span className="exp-client">{job.client}</span>
                    </div>
                    <ChevronIcon />
                  </div>
                  <div
                    className={`exp-panel${isOpen ? " exp-panel--open" : ""}`}
                  >
                    <div className="exp-panel-inner">
                      <div className="exp-panel-content">
                        {job.desc && <p className="exp-desc">{job.desc}</p>}
                        {job.chips.length > 0 && (
                          <div className="chips">
                            {job.chips.map((chip) => (
                              <span key={chip} className="chip">
                                {chip}
                              </span>
                            ))}
                          </div>
                        )}
                        {job.highlights.length > 0 && (
                          <div className="highlight-bar">
                            {job.highlights.map((h) => (
                              <div key={h.label} className="hl-item">
                                <div className="hl-num">{h.num}</div>
                                <div className="hl-label">{h.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// PORTFOLIO PREVIEW (on home page)
// Shows the first/featured case study as a teaser
// with a "View All Work" link to the portfolio page
// ─────────────────────────────────────────────
const PortfolioPreview = ({ navigate }) => {
  const featured = caseStudies[0];

  return (
    <section id="portfolio" className="section section--alt section-wrapper">
      <div className="blob-layer" aria-hidden="true">
        <div className="blob blob--portfolio-1" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <p className="sec-label">Featured Work</p>
        <h2>Case Studies</h2>

        {/* Featured card */}
        <div
          className="cs-featured-card"
          onClick={() => navigate("case-study", featured.slug)}
        >
          <div
            className="cs-featured-card__cover"
            style={{ background: featured.coverColor }}
          >
            <div className="cs-featured-card__cover-inner">
              <p className="cs-featured-card__cover-label">Case Study</p>
            </div>
          </div>
          <div className="cs-featured-card__body">
            <div className="cs-tags">
              {featured.tags.map((t) => (
                <span key={t} className="cs-tag">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="cs-featured-card__title">{featured.title}</h3>
            <p className="cs-featured-card__subtitle">{featured.subtitle}</p>
            <p className="cs-featured-card__lead">{featured.lead}</p>
            <button
              className="btn btn--primary cs-featured-card__cta"
              onClick={(e) => {
                e.stopPropagation();
                navigate("case-study", featured.slug);
              }}
            >
              View Case Study →
            </button>
          </div>
        </div>

        {/* If there are more case studies, tease them */}
        {caseStudies.length > 1 && (
          <div className="cs-more-teaser">
            <p className="text-small">
              And {caseStudies.length - 1} more{" "}
              {caseStudies.length - 1 === 1 ? "project" : "projects"}
            </p>
          </div>
        )}

        {/* <div style={{ marginTop: "var(--space-xl)", textAlign: "center" }}>
          <button
            className="btn btn--secondary"
            onClick={() => navigate("portfolio")}
          >
            View All Work
          </button>
        </div> */}
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
const About = () => (
  <section id="about" className="section section-wrapper">
    <div className="blob-layer" aria-hidden="true">
      <div className="blob blob--about-1" />
      <div className="blob blob--about-2" />
    </div>

    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <div className="about">
        <div>
          <div className="card__image about__image" />
        </div>
        <div>
          <p className="sec-label">About Me</p>
          <h2>About Me</h2>
          <p className="text-medium">
            I started out as a software developer in the fintech space, building
            mobile and web applications for banking products. Over time, i found
            myself drawn to the decisions behind the screens, how users
            experiences these systems and how small design choices impact
            clarity and trust. Today, I focus on designing user-centered
            experiences, drawing on my technical background to balance usability
            with real-world constraints. My background allows me to approach
            design with a strong understanding of technical constraints, while
            focusing on creating experiences that are simple, usable and
            thoughtful. I'm not focused on UX design, applying both technical
            and design thinking to craft seamless end-to-end user journeys.
          </p>

          {/* ---------- SKILLS CHIPS -------- */}
          {/* <div className="about__skills">
            {[
              "User Research",
              "UI Design",
              "Prototyping",
              "Mobile Design",
              "Design Systems",
              "Figma",
              "Sketch",
              "Adobe Creative Suite",
            ].map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────
const Contact = () => (
  <section id="contact" className="section section-wrapper">
    <div className="blob-layer" aria-hidden="true">
      <div className="blob blob--contact-1" />
      <div className="blob blob--contact-2" />
    </div>

    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ textAlign: "left", marginBottom: "var(--space-xl)" }}>
        <p className="sec-label">Contact Me</p>
        <h2>Let's build something meaningful</h2>
      </div>
      <form className="contact-form">
        {[
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "subject", label: "Subject", type: "text" },
        ].map(({ id, label, type }) => (
          <div className="form-group" key={id}>
            <label className="form-label" htmlFor={id}>
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              className="form-input"
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            required
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </div>
      </form>
      <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
        <p className="text-small">
          Or reach out directly at{" "}
          <a
            href="mailto:hello@example.com"
            style={{ color: "var(--primary-warm)" }}
          >
            hello@example.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__links">
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
          { label: "Dribbble", href: "https://dribbble.com/yourprofile" },
          { label: "Behance", href: "https://behance.net/yourprofile" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}
        <a href="mailto:hello@example.com" className="footer__link">
          Email
        </a>
      </div>
      <p className="text-small">© 2026 UX/UI Portfolio. Designed with care.</p>
    </div>
  </footer>
);

// ─────────────────────────────────────────────
// PORTFOLIO PAGE (all case studies overview)
// ─────────────────────────────────────────────
const PortfolioPage = ({ navigate }) => {
  useBlobVisibility();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <div className="page-hero section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--hero-1" />
          <div className="blob blob--hero-2" />
        </div>
        <div className="container page-hero__content">
          <button
            className="back-btn"
            onClick={() => navigate("home", "#portfolio")}
          >
            ← Back
          </button>
          <p className="sec-label">All Work</p>
          <h1>Case Studies</h1>
          <p className="hero__description">
            A collection of UX/UI projects spanning mobile, fintech, and
            health-tech.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="cs-grid">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="cs-card"
                onClick={() => navigate("case-study", cs.slug)}
              >
                <div
                  className="cs-card__cover"
                  style={{ background: cs.coverColor }}
                />
                <div className="cs-card__body">
                  <div className="cs-tags">
                    {cs.tags.map((t) => (
                      <span key={t} className="cs-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="cs-card__title">{cs.title}</h3>
                  <p className="cs-card__subtitle">{cs.subtitle}</p>
                  <p className="cs-card__lead">{cs.lead}</p>
                  <span className="cs-card__link">View Case Study →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ─────────────────────────────────────────────
// CASE STUDY DETAIL PAGE
// ─────────────────────────────────────────────
const CaseStudyPage = ({ slug, navigate }) => {
  useBlobVisibility();
  const cs = caseStudies.find((c) => c.slug === slug);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cs)
    return (
      <div className="page" style={{ padding: "120px 0", textAlign: "center" }}>
        <p>Case study not found.</p>
        <button
          className="btn btn--primary"
          onClick={() => navigate("portfolio")}
          style={{ marginTop: "1rem" }}
        >
          Back to Portfolio
        </button>
      </div>
    );

  return (
    <div className="page">
      {/* ── Hero ── */}
      <div className="cs-detail-hero section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--hero-1" />
          <div className="blob blob--hero-2" />
        </div>
        <div className="container cs-detail-hero__content">
          <button className="back-btn" onClick={() => navigate("portfolio")}>
            ← All Work
          </button>
          <div className="cs-tags" style={{ marginBottom: "var(--space-sm)" }}>
            {cs.tags.map((t) => (
              <span key={t} className="cs-tag">
                {t}
              </span>
            ))}
          </div>
          <h1>{cs.title}</h1>
          <p className="cs-detail-hero__subtitle">{cs.subtitle}</p>
        </div>
      </div>

      {/* ── Cover ── */}
      <div
        className="cs-detail-cover"
        style={{ background: cs.coverColor }}
        aria-hidden="true"
      />

      {/* ── Overview ── */}
      <section className="section section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--exp-1" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="portfolio__lead">{cs.lead}</p>

          <div
            className="pf-two-col"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">The Problem</p>
              <p className="pf-card__body">{cs.problem}</p>
            </div>
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">The Goal</p>
              <p className="pf-card__body">{cs.goal}</p>
            </div>
          </div>

          <div
            className="pf-card pf-card--muted"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            <p className="pf-card__label">Why This Matters</p>
            <p className="pf-card__body">{cs.whyItMatters}</p>
          </div>
        </div>
      </section>

      {/* ── Design Process ── */}
      <section className="section section--alt section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--portfolio-1" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="sec-label">Design Process</p>
          <h2>How I approached it</h2>
          <div className="pf-process-wrap">
            <div className="pf-process">
              {cs.processSteps.map((s, i) => (
                <React.Fragment key={s.num}>
                  <div className="pf-step">
                    <div className="pf-step__num">{s.num}</div>
                    <div className="pf-step__title">{s.step}</div>
                    <div className="pf-step__text">{s.text}</div>
                  </div>
                  {i < cs.processSteps.length - 1 && (
                    <div className="pf-step__arrow">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Screens ── */}
      <section className="section section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--about-1" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="sec-label">Screens</p>
          <h2>The design</h2>
          <div className="pf-screens">
            {cs.screens.map((sc) => (
              <div key={sc.label} className="pf-screen">
                <div className="pf-screen__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="pf-screen__body" />
                <p className="pf-screen__label">{sc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights + Outcomes ── */}
      <section className="section section--alt section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--contact-1" />
          <div className="blob blob--contact-2" />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="sec-label">Results</p>
          <h2>What we learned</h2>
          <div className="pf-two-col">
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">Key Insights</p>
              <ul className="pf-list pf-list--bullet">
                {cs.insights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">Outcomes</p>
              <ul className="pf-list pf-list--dash">
                {cs.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next project */}
          <div className="cs-next">
            {caseStudies.length > 1 ? (
              <>
                <p className="sec-label">Next Project</p>
                {(() => {
                  const currentIdx = caseStudies.findIndex(
                    (c) => c.slug === slug,
                  );
                  const next =
                    caseStudies[(currentIdx + 1) % caseStudies.length];
                  return (
                    <button
                      className="btn btn--primary"
                      onClick={() => navigate("case-study", next.slug)}
                    >
                      {next.title} →
                    </button>
                  );
                })()}
              </>
            ) : (
              <button
                className="btn btn--secondary"
                onClick={() => navigate("portfolio")}
              >
                ← Back to All Work
              </button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
// Hook: makes blobs in each section fade in when the section enters the viewport.
const useBlobVisibility = () => {
  React.useEffect(() => {
    const wrappers = document.querySelectorAll(".section-wrapper");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const blobs = entry.target.querySelectorAll(".blob");
          blobs.forEach((b) => {
            if (entry.isIntersecting) {
              b.classList.add("blob--visible");
            }
          });
        });
      },
      { threshold: 0.08 },
    );
    wrappers.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

const HomePage = ({ navigate }) => {
  useBlobVisibility();

  React.useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handler = (e) => {
      e.preventDefault();
      const el = document.querySelector(e.currentTarget.getAttribute("href"));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    links.forEach((l) => l.addEventListener("click", handler));
    return () => links.forEach((l) => l.removeEventListener("click", handler));
  }, []);

  return (
    <>
      <Hero navigate={navigate} />
      <Experience />
      <PortfolioPreview navigate={navigate} />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

// ─────────────────────────────────────────────
// APP — simple state-based router
// ─────────────────────────────────────────────
function App() {
  const [page, setPage] = React.useState("home");
  const [slug, setSlug] = React.useState(null);
  const [pendingHash, setPendingHash] = React.useState(null);

  const navigate = (targetPage, payload) => {
    if (targetPage === "home" && payload && payload.startsWith("#")) {
      setPendingHash(payload);
      setPage("home");
    } else if (targetPage === "case-study") {
      setSlug(payload);
      setPage("case-study");
    } else {
      setPage(targetPage);
    }
  };

  React.useEffect(() => {
    if (page === "home" && pendingHash) {
      const el = document.querySelector(pendingHash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setPendingHash(null);
    }
  }, [page, pendingHash]);

  return (
    <div className="App">
      <Navigation navigate={navigate} currentPage={page} />

      {page === "home" && <HomePage navigate={navigate} />}
      {page === "portfolio" && <PortfolioPage navigate={navigate} />}
      {page === "case-study" && (
        <CaseStudyPage slug={slug} navigate={navigate} />
      )}
    </div>
  );
}

export default App;
