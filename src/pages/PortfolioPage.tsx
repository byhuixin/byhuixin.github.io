import { useEffect } from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/portfolio";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { Footer } from "../components/Footer";
import { useBlobVisibility } from "../hooks/useBlobVisibility";

export const PortfolioPage = (): JSX.Element => {
  useBlobVisibility();

  useEffect(() => {
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
          <Link to="/" className="back-btn">
            ← Back
          </Link>
          <p className="sec-label">All Work</p>
          <h1>Case Studies</h1>
          <p className="hero__description">
            A collection of UX/UI projects spanning mobile, fintech, and health-tech.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="cs-grid">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
