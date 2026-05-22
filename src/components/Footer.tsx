// ─── Footer.tsx ─────────────────────────────────────────────────────────────

export const Footer = (): JSX.Element => (
  <footer className="footer">
    {/* ── Content ── */}
    <div className="container footer__content">
      <div className="footer__left">
        <p className="footer__message">Thank you for dropping by.</p>
        <p className="footer__invite">
          Thanks for sharing a moment of your time. Until next time —
        </p>
        <p className="footer__invite">
          {" "}
          Always exploring the spaces between people and technology.
        </p>
      </div>
      <a href="#top" className="footer__top">
        Back to top ↑
      </a>
    </div>
    {/* ── Wave terrain illustration ── */}
    <div className="footer__waves" aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer__wave-svg"
      >
        <path
          d="M0 55 Q180 18 360 42 Q540 66 720 38 Q900 10 1080 34 Q1260 58 1440 28 L1440 90 L0 90 Z"
          fill="#ddd8ce"
          opacity="0.28"
        />
        <path
          d="M0 65 Q200 36 400 55 Q600 74 800 50 Q1000 26 1200 48 Q1340 62 1440 44 L1440 90 L0 90 Z"
          fill="#e8c4b0"
          opacity="0.22"
        />
        <path
          d="M0 75 Q180 58 360 68 Q540 78 720 62 Q900 46 1080 60 Q1260 74 1440 58 L1440 90 L0 90 Z"
          fill="#e8c4b0"
          opacity="0.18"
        />
      </svg>
    </div>
  </footer>
);
