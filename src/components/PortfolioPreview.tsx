import { useNavigate } from "react-router-dom";
import { caseStudies } from "../data/portfolio";
import { ArrowRightIcon } from "./SvgIcons";
import CaseNestPreview from "../assets/images/Dashboard Home Main - Today.png";

// Care network illustration for the card with updated colour palette
const CareNetworkPreview = () => (
  <svg
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="pf-featured__network-svg"
  >
    {/* Soft background rings */}
    <circle
      cx="130"
      cy="130"
      r="110"
      stroke="#7B85E0"
      strokeWidth="0.5"
      strokeDasharray="3 5"
      opacity="0.4"
    />
    <circle
      cx="130"
      cy="130"
      r="76"
      stroke="#E8894A"
      strokeWidth="0.5"
      strokeDasharray="2 4"
      opacity="0.2"
    />

    {/* Connection lines */}
    <line
      x1="130"
      y1="90"
      x2="130"
      y2="54"
      stroke="#7B85E0"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="160"
      y1="110"
      x2="196"
      y2="90"
      stroke="#7B85E0"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="160"
      y1="152"
      x2="196"
      y2="172"
      stroke="#7B85E0"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="100"
      y1="152"
      x2="64"
      y2="172"
      stroke="#7B85E0"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="100"
      y1="110"
      x2="64"
      y2="90"
      stroke="#7B85E0"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />

    {/* Center node — care recipient */}
    <circle
      cx="130"
      cy="130"
      r="32"
      fill="#EBC770"
      stroke="#7B85E0"
      strokeWidth="1.5"
    />
    <circle cx="130" cy="130" r="24" fill="white" />
    <path
      d="M130 142 C130 142 116 133 116 123 C116 119 119 116 123 116 C126 116 128 117.5 130 120 C132 117.5 134 116 137 116 C141 116 144 119 144 123 C144 133 130 142 130 142Z"
      fill="#E8894A"
      opacity="0.85"
    />

    {/* Satellite nodes */}
    {[
      { cx: 130, cy: 38, init: "S", color: "#E8894A", opacity: 0.9 },
      { cx: 214, cy: 82, init: "M", color: "#4FBF8F", opacity: 0.75 },
      { cx: 214, cy: 178, init: "H", color: "#7098E1", opacity: 0.7 },
      { cx: 46, cy: 178, init: "J", color: "#7098E1", opacity: 0.7 },
      { cx: 46, cy: 82, init: "K", color: "#4FBF8F", opacity: 0.75 },
    ].map((n) => (
      <g key={n.init}>
        <circle
          cx={n.cx}
          cy={n.cy}
          r={18}
          fill={n.color}
          opacity={n.opacity * 0.15}
          stroke={n.color}
          strokeWidth="1"
        />
        <circle
          cx={n.cx}
          cy={n.cy}
          r={13}
          fill={n.color}
          opacity={n.opacity * 0.9}
        />
        <text
          x={n.cx}
          y={n.cy + 4}
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontWeight="700"
          fontFamily="sans-serif"
        >
          {n.init}
        </text>
      </g>
    ))}

    {/* Floating chips */}
    <rect
      x="148"
      y="20"
      width="72"
      height="22"
      rx="11"
      fill="white"
      stroke="#7B85E0"
      strokeWidth="1"
    />
    <circle cx="162" cy="31" r="5" fill="#E8894A" opacity="0.7" />
    <rect x="172" y="27" width="36" height="3" rx="1.5" fill="#4FBF8F" />
    <rect x="172" y="33" width="26" height="2.5" rx="1.25" fill="#4FBF8F" />

    <rect
      x="38"
      y="206"
      width="72"
      height="22"
      rx="11"
      fill="white"
      stroke="#7B85E0"
      strokeWidth="1"
    />
    <circle cx="52" cy="217" r="5" fill="#4FBF8F" opacity="0.8" />
    <path
      d="M50 217 L52 219 L56 215"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="62" y="213" width="36" height="3" rx="1.5" fill="#EBC770" />
    <rect x="62" y="219" width="26" height="2.5" rx="1.25" fill="#EBC770" />
  </svg>
);

export const PortfolioPreview = (): JSX.Element | null => {
  const navigate = useNavigate();
  const featured = caseStudies[0];

  if (!featured) return null;

  return (
    <section id="portfolio" className="section section--alt section-wrapper">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <p className="sec-label">Featured Work</p>
        <h2>Case Studies</h2>

        {/* ── Featured card ── */}
        <article
          className="pf-featured"
          onClick={() => navigate(`/case-study/${featured.slug}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate(`/case-study/${featured.slug}`);
            }
          }}
          aria-label={`View case study: ${featured.title}`}
        >
          {/* Left: text content */}
          <div className="pf-featured__body">
            {/* Tags */}
            <div className="pf-featured__tags">
              {featured.tags?.map((tag) => (
                <span key={tag} className="pf-featured__tag">
                  {tag}
                </span>
              ))}
            </div>

            <p className="pf-featured__label">Case Study</p>
            <h3 className="pf-featured__title">{featured.title}</h3>
            <p className="pf-featured__subtitle">{featured.subtitle}</p>
            <p className="pf-featured__lead">{featured.lead}</p>

            {/* Stats preview
            <div className="pf-featured__stats">
              <div className="pf-featured__stat">
                <span className="pf-featured__stat-num">210k+</span>
                <span className="pf-featured__stat-label">
                  caregivers in Singapore
                </span>
              </div>
              <div className="pf-featured__stat">
                <span className="pf-featured__stat-num">42%</span>
                <span className="pf-featured__stat-label">
                  also in full-time work
                </span>
              </div>
              <div className="pf-featured__stat">
                <span className="pf-featured__stat-num">5</span>
                <span className="pf-featured__stat-label">
                  key design decisions
                </span>
              </div>
            </div> */}

            <button
              type="button"
              className="btn btn--primary pf-featured__cta"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/case-study/${featured.slug}`);
              }}
            >
              <span>View Case Study</span>
              <ArrowRightIcon />
            </button>
          </div>

          {/* Right: visual panel */}
          <div
            className="pf-featured__visual"
            style={
              { "--cs-cover-color": featured.coverColor } as React.CSSProperties
            }
          >
            <div className="pf-featured__visual-bg" aria-hidden="true" />

            {/* Network illustration — background */}
            <div className="pf-featured__network" aria-hidden="true">
              <CareNetworkPreview />
            </div>

            {/* Phone mockup — PNG image foreground */}
            <img
              src={CaseNestPreview}
              alt=""
              className="pf-featured__phone"
              aria-hidden="true"
            />
          </div>
        </article>

        {/* More case studies teaser */}
        {caseStudies.length > 1 && (
          <p className="pf-more-teaser text-small">
            And {caseStudies.length - 1} more{" "}
            {caseStudies.length - 1 === 1 ? "project" : "projects"} coming soon
          </p>
        )}
      </div>
    </section>
  );
};
