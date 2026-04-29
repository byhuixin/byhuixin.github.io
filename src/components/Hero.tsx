import { Link } from "react-router-dom";

export const Hero = (): JSX.Element => (
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
        <Link to="/portfolio" className="btn btn--primary">
          View My Work
        </Link>
        <Link to="/#contact" className="btn btn--secondary">
          Get In Touch
        </Link>
      </div>
    </div>
  </section>
);
