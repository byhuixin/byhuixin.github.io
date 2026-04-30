import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { caseStudies } from "../data/portfolio";
import { Footer } from "../components/Footer";
import { ArrowLeftIcon, ArrowRightIcon } from "../components/SvgIcons";
import { useBlobVisibility } from "../hooks/useBlobVisibility";

export const CaseStudyPage = (): JSX.Element => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  useBlobVisibility();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
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

  const currentIndex = caseStudies.findIndex(
    (item) => item.slug === caseStudy.slug,
  );
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="page">
      <div className="cs-detail-hero section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--hero-1" />
          <div className="blob blob--hero-2" />
        </div>
        <div className="container cs-detail-hero__content">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/#portfolio")}
            aria-label="Back to portfolio"
          >
            <ArrowLeftIcon />
          </button>
          <h1>{caseStudy.title}</h1>
          <p className="cs-detail-hero__subtitle">{caseStudy.subtitle}</p>
        </div>
      </div>
      <div
        className="cs-detail-cover"
        style={{ background: caseStudy.coverColor }}
        aria-hidden="true"
      />
      <section className="section section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--exp-1" />
        </div>
        <div className="container">
          <p className="portfolio__lead">{caseStudy.lead}</p>
          <div
            className="pf-two-col"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">The Problem</p>
              <p className="pf-card__body">{caseStudy.problem}</p>
            </div>
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">The Goal</p>
              <p className="pf-card__body">{caseStudy.goal}</p>
            </div>
          </div>
          <div
            className="pf-card pf-card--muted"
            style={{ marginBottom: "var(--space-xl)" }}
          >
            <p className="pf-card__label">Why This Matters</p>
            <p className="pf-card__body">{caseStudy.whyItMatters}</p>
          </div>
        </div>
      </section>
      <section className="section section--alt section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--portfolio-1" />
        </div>
        <div className="container">
          <p className="sec-label">Design Process</p>
          <h2>How I approached it</h2>
          <div className="pf-process-wrap">
            <div className="pf-process">
              {caseStudy.processSteps.map((step, index) => (
                <>
                  <div key={step.num} className="pf-step">
                    <div className="pf-step__num">{step.num}</div>
                    <div className="pf-step__title">{step.step}</div>
                    <div className="pf-step__text">{step.text}</div>
                  </div>
                  {index < caseStudy.processSteps.length - 1 && (
                    <div className="pf-step__arrow">
                      <ArrowRightIcon />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--about-1" />
        </div>
        <div className="container">
          <p className="sec-label">Screens</p>
          <h2>The design</h2>
          <div className="pf-screens">
            {caseStudy.screens.map((screen) => (
              <div key={screen.label} className="pf-screen">
                <div className="pf-screen__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="pf-screen__body" />
                <p className="pf-screen__label">{screen.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--alt section-wrapper">
        <div className="blob-layer" aria-hidden="true">
          <div className="blob blob--contact-1" />
          <div className="blob blob--contact-2" />
        </div>
        <div className="container">
          <p className="sec-label">Results</p>
          <h2>What we learned</h2>
          <div className="pf-two-col">
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">Key Insights</p>
              <ul className="pf-list pf-list--bullet">
                {caseStudy.insights.map((insight) => (
                  <li key={insight}>{insight}</li>
                ))}
              </ul>
            </div>
            <div className="pf-card pf-card--muted">
              <p className="pf-card__label">Outcomes</p>
              <ul className="pf-list pf-list--dash">
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cs-next">
            <p className="sec-label">Next Project</p>
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => navigate(`/case-study/${nextStudy.slug}`)}
            >
              <span>{nextStudy.title}</span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
