import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TABS = [
  { label: "Works", hash: "#portfolio", section: "portfolio" },
  { label: "About", hash: "#about", section: "about" },
  { label: "Contact", hash: "#contact", section: "contact" },
] as const;

export const MobileTabBar = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("portfolio");

  useEffect(() => {
    const sections = TABS.map((tab) =>
      document.getElementById(tab.section),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleTabClick(hash: string) {
    navigate(`/${hash}`);
  }

  return (
    <nav className="mobile-tab-bar" aria-label="Mobile navigation">
      {TABS.map((tab) => {
        const isActive = activeSection === tab.section;
        return (
          <button
            key={tab.label}
            type="button"
            className={`mobile-tab-bar__item${isActive ? " active" : ""}`}
            onClick={() => handleTabClick(tab.hash)}
            aria-current={isActive ? "page" : undefined}
          >
            <span className="mobile-tab-bar__icon" aria-hidden="true">
              {tab.section === "portfolio" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              )}
              {tab.section === "about" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              )}
              {tab.section === "contact" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              )}
            </span>
            <span className="mobile-tab-bar__label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
