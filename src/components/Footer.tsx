export const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="container footer__content">
      <div className="footer__links">
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
          { label: "Dribbble", href: "https://dribbble.com/yourprofile" },
          { label: "Behance", href: "https://behance.net/yourprofile" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
        <a href="mailto:hello@example.com" className="footer__link">
          Email
        </a>
      </div>
      <p className="text-small">© 2026 UX/UI Portfolio. Designed with care.</p>
    </div>
  </footer>
);
