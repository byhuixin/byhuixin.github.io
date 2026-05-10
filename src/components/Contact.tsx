export const Contact = (): JSX.Element => (
  <section id="contact" className="section section-wrapper">
    <div className="container contact__content">
      <div className="contact-heading">
        <p className="sec-label">Contact Me</p>
        <h2>Let's build something meaningful</h2>
      </div>
      <form className="contact-form">
        {[
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "subject", label: "Subject", type: "text" },
        ].map(({ id, label, type }) => (
          <div className="form-group" key={id}>
            <label className="form-label" htmlFor={id}>
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              className="form-input"
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            required
          />
        </div>
        <div className="contact-button-wrapper">
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </div>
      </form>
      <div className="contact-copy">
        <p className="text-small">
          Or reach out directly at{" "}
          <a href="mailto:hello@example.com" className="contact-link">
            hello@example.com
          </a>
        </p>
      </div>
    </div>
  </section>
);
