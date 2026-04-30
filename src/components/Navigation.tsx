import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navigation = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleNavClick(hash: string) {
    setOpen(false);
    navigate(`/${hash}`);
  }

  return (
    <>
      <nav className="nav">
        <div className="nav__container container">
          <NavLink to="/" className="nav__logo" onClick={() => setOpen(false)}>
            Portfolio
          </NavLink>

          {/* Desktop links */}
          <ul className="nav__menu">
            <li>
              <button
                type="button"
                className="nav__link"
                onClick={() => handleNavClick("#about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav__link"
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            className={`nav__hamburger${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <ul className={`nav__drawer${open ? " open" : ""}`}>
          <li>
            <button
              type="button"
              className="nav__link"
              onClick={() => handleNavClick("#about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              className="nav__link"
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
