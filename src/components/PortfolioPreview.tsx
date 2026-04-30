import { useNavigate } from "react-router-dom";
import { caseStudies } from "../data/portfolio";
import { ArrowRightIcon } from "./SvgIcons";

export const PortfolioPreview = (): JSX.Element | null => {
  const navigate = useNavigate();
  const featured = caseStudies[0];

  if (!featured) {
    return null;
  }

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
          onClick={() => navigate(`/case-study/${featured.slug}`)}
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
              type="button"
              className="btn btn--primary cs-featured-card__cta"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/case-study/${featured.slug}`);
              }}
            >
              <span>View Case Study</span>
              <ArrowRightIcon />
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
