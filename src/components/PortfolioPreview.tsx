import { useNavigate } from "react-router-dom";
import { caseStudies } from "../data/portfolio";
import { ArrowRightIcon } from "./SvgIcons";

// Mini device mockup for the featured card — shows the dashboard at a glance
const MiniDashboardPreview = () => (
  <svg
    viewBox="0 0 200 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="pf-featured__device-svg"
  >
    {/* Phone shell */}
    <rect
      x="4"
      y="2"
      width="192"
      height="356"
      rx="26"
      fill="white"
      stroke="#E6E0D6"
      strokeWidth="1.5"
    />
    <rect x="10" y="8" width="180" height="344" rx="20" fill="#FAF8F5" />
    {/* Notch */}
    <rect x="68" y="12" width="64" height="12" rx="6" fill="#E6E0D6" />

    {/* Status bar */}
    <circle cx="30" cy="18" r="2" fill="#E6E0D6" />
    <circle cx="170" cy="18" r="2" fill="#E6E0D6" />

    {/* App header */}
    <rect x="10" y="28" width="180" height="38" fill="white" />
    <text
      x="24"
      y="41"
      fontSize="8"
      fontWeight="700"
      fill="#8C8479"
      letterSpacing="0.08em"
      fontFamily="sans-serif"
    >
      CARENEST
    </text>
    <text
      x="24"
      y="56"
      fontSize="11"
      fontWeight="600"
      fill="#3D3530"
      fontFamily="sans-serif"
    >
      Good morning
    </text>
    <circle cx="176" cy="47" r="10" fill="#DCCFC1" />
    <text
      x="176"
      y="51"
      textAnchor="middle"
      fontSize="8"
      fontWeight="600"
      fill="#A8522A"
      fontFamily="sans-serif"
    >
      S
    </text>

    {/* Today card */}
    <rect x="18" y="74" width="164" height="46" rx="9" fill="#FDF5EE" />
    <text
      x="28"
      y="88"
      fontSize="7"
      fontWeight="600"
      fill="#C96A3A"
      letterSpacing="0.1em"
      fontFamily="sans-serif"
    >
      TODAY
    </text>
    <text
      x="28"
      y="101"
      fontSize="10"
      fontWeight="600"
      fill="#3D3530"
      fontFamily="sans-serif"
    >
      3 tasks remaining
    </text>
    <text x="28" y="113" fontSize="7" fill="#8C8479" fontFamily="sans-serif">
      2 meds · 1 appointment
    </text>
    <rect x="132" y="90" width="36" height="5" rx="2.5" fill="#E6E0D6" />
    <rect x="132" y="90" width="22" height="5" rx="2.5" fill="#C96A3A" />

    {/* Tasks */}
    <text
      x="18"
      y="135"
      fontSize="7"
      fontWeight="600"
      fill="#8C8479"
      letterSpacing="0.08em"
      fontFamily="sans-serif"
    >
      UPCOMING
    </text>
    {[
      {
        label: "Lisinopril 10mg",
        time: "8:00 AM",
        color: "#C96A3A",
        done: true,
      },
      {
        label: "Physio appointment",
        time: "2:30 PM",
        color: "#7D9B78",
        done: false,
      },
      { label: "Evening meds", time: "8:00 PM", color: "#C96A3A", done: false },
    ].map((t, i) => {
      const y = 143 + i * 42;
      return (
        <g key={t.label}>
          <rect
            x="18"
            y={y}
            width="164"
            height="34"
            rx="7"
            fill="white"
            stroke="#E6E0D6"
            strokeWidth="0.5"
          />
          <circle
            cx="32"
            cy={y + 17}
            r="7"
            fill={t.done ? "#7D9B78" : t.color}
            opacity={t.done ? 1 : 0.15}
          />
          {t.done ? (
            <path
              d={`M${29} ${y + 17} L${31.5} ${y + 20} L${36} ${y + 14}`}
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <circle cx="32" cy={y + 17} r="3.5" fill={t.color} />
          )}
          <text
            x="44"
            y={y + 13}
            fontSize="9"
            fontWeight="600"
            fill={t.done ? "#8C8479" : "#3D3530"}
            fontFamily="sans-serif"
          >
            {t.label}
          </text>
          <text
            x="44"
            y={y + 24}
            fontSize="7"
            fill="#8C8479"
            fontFamily="sans-serif"
          >
            {t.time}
          </text>
          <rect
            x="152"
            y={y + 10}
            width="22"
            height="13"
            rx="6.5"
            fill={t.color}
            opacity="0.1"
          />
          <text
            x="163"
            y={y + 20}
            textAnchor="middle"
            fontSize="6"
            fill={t.color}
            fontFamily="sans-serif"
          >
            {t.done ? "done" : "due"}
          </text>
        </g>
      );
    })}

    {/* Bottom nav bar */}
    <rect x="10" y="314" width="180" height="38" rx="0" fill="white" />
    <line
      x1="10"
      y1="314"
      x2="190"
      y2="314"
      stroke="#E6E0D6"
      strokeWidth="0.5"
    />
    {["⌂", "📅", "+", "👤"].map((icon, i) => (
      <text
        key={i}
        x={35 + i * 42}
        y="338"
        textAnchor="middle"
        fontSize={icon === "+" ? "16" : "12"}
        fill={i === 0 ? "#C96A3A" : "#8C8479"}
        fontFamily="sans-serif"
      >
        {icon}
      </text>
    ))}

    {/* FAB */}
    <circle cx="100" cy="331" r="16" fill="#C96A3A" />
    <text
      x="100"
      y="336"
      textAnchor="middle"
      fontSize="16"
      fill="white"
      fontFamily="sans-serif"
    >
      +
    </text>
  </svg>
);

// Care network illustration for the card
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
      stroke="#DCCFC1"
      strokeWidth="0.5"
      strokeDasharray="3 5"
      opacity="0.4"
    />
    <circle
      cx="130"
      cy="130"
      r="76"
      stroke="#C96A3A"
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
      stroke="#DCCFC1"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="160"
      y1="110"
      x2="196"
      y2="90"
      stroke="#DCCFC1"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="160"
      y1="152"
      x2="196"
      y2="172"
      stroke="#DCCFC1"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="100"
      y1="152"
      x2="64"
      y2="172"
      stroke="#DCCFC1"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />
    <line
      x1="100"
      y1="110"
      x2="64"
      y2="90"
      stroke="#DCCFC1"
      strokeWidth="1.2"
      strokeDasharray="3 3"
    />

    {/* Center node — care recipient */}
    <circle
      cx="130"
      cy="130"
      r="32"
      fill="#FAF8F5"
      stroke="#DCCFC1"
      strokeWidth="1.5"
    />
    <circle cx="130" cy="130" r="24" fill="white" />
    <path
      d="M130 142 C130 142 116 133 116 123 C116 119 119 116 123 116 C126 116 128 117.5 130 120 C132 117.5 134 116 137 116 C141 116 144 119 144 123 C144 133 130 142 130 142Z"
      fill="#C96A3A"
      opacity="0.85"
    />

    {/* Satellite nodes */}
    {[
      { cx: 130, cy: 38, init: "S", color: "#C96A3A", opacity: 0.9 },
      { cx: 214, cy: 82, init: "M", color: "#7D9B78", opacity: 0.75 },
      { cx: 214, cy: 178, init: "H", color: "#8C8479", opacity: 0.7 },
      { cx: 46, cy: 178, init: "J", color: "#8C8479", opacity: 0.7 },
      { cx: 46, cy: 82, init: "K", color: "#7D9B78", opacity: 0.75 },
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
          // opacity2={n.opacity}
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
      stroke="#DCCFC1"
      strokeWidth="1"
    />
    <circle cx="162" cy="31" r="5" fill="#C96A3A" opacity="0.7" />
    <rect x="172" y="27" width="36" height="3" rx="1.5" fill="#E6E0D6" />
    <rect x="172" y="33" width="26" height="2.5" rx="1.25" fill="#E6E0D6" />

    <rect
      x="38"
      y="206"
      width="72"
      height="22"
      rx="11"
      fill="white"
      stroke="#DCCFC1"
      strokeWidth="1"
    />
    <circle cx="52" cy="217" r="5" fill="#7D9B78" opacity="0.8" />
    <path
      d="M50 217 L52 219 L56 215"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="62" y="213" width="36" height="3" rx="1.5" fill="#E6E0D6" />
    <rect x="62" y="219" width="26" height="2.5" rx="1.25" fill="#E6E0D6" />
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

            {/* Phone mockup — foreground */}
            <div className="pf-featured__phone" aria-hidden="true">
              <MiniDashboardPreview />
            </div>
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
