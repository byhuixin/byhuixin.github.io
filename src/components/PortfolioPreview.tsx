import { Link } from "react-router-dom";
import { caseStudies } from "../data/portfolio";

export const PortfolioPreview = (): JSX.Element | null => {
  const featured = caseStudies[0];

  if (!featured) {
    return null;
  }

  return (
    <section id="portfolio" className="section section--alt section-wrapper">
      <div className="blob-layer" aria-hidden="true">
        <div className="blob blob--portfolio-1" />
      </div>
      <div className="container section-content">
        <p className="sec-label">Featured Work</p>
        <h2>Case Studies</h2>
        <Link to={`/case-study/${featured.slug}`} className="cs-featured-card">
          <div className="cs-featured-card__cover" style={{ background: featured.coverColor }}>
            <div className="cs-featured-card__cover-inner">
              <p className="cs-featured-card__cover-label">Case Study</p>
            </div>
          </div>
          <div className="cs-featured-card__body">
            <div className="cs-tags">
              {featured.tags.map((tag) => (
                <span key={tag} className="cs-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="cs-featured-card__title">{featured.title}</h3>
            <p className="cs-featured-card__subtitle">{featured.subtitle}</p>
            <p className="cs-featured-card__lead">{featured.lead}</p>
            <span className="btn btn--primary cs-featured-card__cta">View Case Study →</span>
          </div>
        </Link>
        {caseStudies.length > 1 && (
          <div className="cs-more-teaser">
            <p className="text-small">
              And {caseStudies.length - 1} more {caseStudies.length - 1 === 1 ? "project" : "projects"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
