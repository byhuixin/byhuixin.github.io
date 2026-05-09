import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero section-wrapper">
      <div
        className="container hero__content"
        style={{ position: "relative", zIndex: 1 }}
      >
        {" "}
        <h1>
          <span style={{ display: "block", color: "var(--neutral-deep)" }}>
            Bridging
          </span>
          <span
            style={{
              display: "block",
              color: "var(--primary-warm)",
            }}
          >
            development
          </span>
          <span style={{ display: "block" }}>
            and <span style={{ color: "var(--secondary-sage)" }}>design</span>
          </span>
        </h1>
        <p className="hero__description">
          With a background in software development, I design user-friendly
          experiences that balance real-world constraints with clarity and
          usability.
        </p>
        <div className="hero__cta">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => navigate("/#portfolio")}
          >
            View My Work
          </button>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => navigate("/#contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
