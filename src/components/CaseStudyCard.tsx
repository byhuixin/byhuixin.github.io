import { Link } from "react-router-dom";
import type { CaseStudy } from "../types/portfolio";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps): JSX.Element => (
  <Link to={`/case-study/${caseStudy.slug}`} className="cs-card">
    <div className="cs-card__cover" style={{ background: caseStudy.coverColor }} />
    <div className="cs-card__body">
      <div className="cs-tags">
        {caseStudy.tags.map((tag) => (
          <span key={tag} className="cs-tag">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="cs-card__title">{caseStudy.title}</h3>
      <p className="cs-card__subtitle">{caseStudy.subtitle}</p>
      <p className="cs-card__lead">{caseStudy.lead}</p>
      <span className="cs-card__link">View Case Study →</span>
    </div>
  </Link>
);
