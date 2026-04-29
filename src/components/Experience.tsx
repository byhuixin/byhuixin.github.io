import { useEffect, useRef, useState } from "react";
import { jobs } from "../data/portfolio";
import { ChevronIcon } from "./SvgIcons";

export const Experience = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleRows, setVisibleRows] = useState<Record<number, boolean>>({});
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = rowRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisibleRows((current) => ({ ...current, [index]: true }));
          }
        });
      },
      { threshold: 0.15 },
    );

    rowRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section section--alt section-wrapper">
      <div className="blob-layer" aria-hidden="true">
        <div className="blob blob--exp-1" />
      </div>
      <div className="container section-content">
        <p className="sec-label">Work Experience</p>
        <h2>Experience</h2>
        <div className="exp-timeline">
          {jobs.map((job, index) => {
            const isOpen = openIndex === index;
            const isVisible = Boolean(visibleRows[index]);

            return (
              <div
                key={job.title}
                ref={(element) => {
                  rowRefs.current[index] = element;
                }}
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
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
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
                            {job.highlights.map((highlight) => (
                              <div key={highlight.label} className="hl-item">
                                <div className="hl-num">{highlight.num}</div>
                                <div className="hl-label">
                                  {highlight.label}
                                </div>
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
