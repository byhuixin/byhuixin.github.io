export const About = (): JSX.Element => (
  <section id="about" className="section section-wrapper">
    <div className="blob-layer" aria-hidden="true">
      <div className="blob blob--about-1" />
      <div className="blob blob--about-2" />
    </div>
    <div className="container about__content">
      <div className="about">
        <div>
          <div className="card__image about__image" />
        </div>
        <div>
          <p className="sec-label">About Me</p>
          <h2>About Me</h2>
          <p className="text-medium">
            I started out as a software developer in the fintech space, building
            mobile and web applications for banking products. Over time, I found
            myself drawn to the decisions behind the screens, how users
            experience these systems and how small design choices impact clarity
            and trust. Today, I focus on designing user-centered experiences,
            drawing on my technical background to balance usability with
            real-world constraints.
          </p>
        </div>
      </div>
    </div>
  </section>
);
