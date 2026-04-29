import { useNavigate } from "react-router-dom";

export const Hero = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero section-wrapper">
      <div className="blob-layer" aria-hidden="true">
        <div className="blob blob--hero-1" />
        <div className="blob blob--hero-2" />
      </div>

      <div className="container hero__content">
        <h1>Bridging development and design</h1>
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
