import { useState } from "react";

interface PrototypeScreen {
  title: string;
  badge?: string;
  description: string;
  component: React.ComponentType;
}

interface ScreenPrototypeProps {
  screens: PrototypeScreen[];
  flowId: string; // keeps each prototype's state isolated
}

export const ScreenPrototype = ({
  screens,
}: ScreenPrototypeProps): JSX.Element => {
  const [current, setCurrent] = useState(0);

  function goTo(n: number) {
    if (n < 0 || n >= screens.length) return;
    setCurrent(n);
  }

  const ScreenSVG = screens[current].component;

  return (
    <div className="proto-layout">
      {/* Phone */}
      <div className="proto-phone-wrap">
        <div className="cs-phone-shell proto-phone-shell">
          <div className="cs-phone-shell__notch" aria-hidden="true" />
          <div className="cs-phone-shell__screen proto-screen-transition">
            <ScreenSVG key={current} />
          </div>
        </div>
      </div>

      {/* Step panel */}
      <div className="proto-panel">
        <ol className="proto-step-list">
          {screens.map((screen, i) => (
            <li
              key={screen.title}
              className={`proto-step${i === current ? " proto-step--active" : ""}${i < current ? " proto-step--done" : ""}`}
              onClick={() => goTo(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && goTo(i)}
              aria-current={i === current ? "step" : undefined}
            >
              <span className="proto-step__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="proto-step__content">
                {screen.badge && (
                  <span className="proto-step__badge">{screen.badge}</span>
                )}
                <p className="proto-step__title">{screen.title}</p>
                <p className="proto-step__desc">{screen.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Nav */}
        <div className="proto-nav">
          <button
            type="button"
            className="proto-nav__btn"
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous screen"
          >
            ← Prev
          </button>

          <div className="proto-dots" role="tablist">
            {screens.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={`Screen ${i + 1}`}
                className={`proto-dot${i === current ? " proto-dot--active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="proto-nav__btn"
            onClick={() => goTo(current + 1)}
            disabled={current === screens.length - 1}
            aria-label="Next screen"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
