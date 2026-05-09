import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

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
          <NavLink
            to="/"
            className="nav__logo-link"
            onClick={() => setOpen(false)}
          >
            <img src={logo} alt="HuiXin logo" className="nav__logo-image" />
          </NavLink>

          {/* Desktop pill group */}
          <ul className="nav__menu">
            <li>
              <button
                type="button"
                className="nav__link"
                onClick={() => handleNavClick("#portfolio")}
              >
                Works
              </button>
            </li>
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
              onClick={() => handleNavClick("#portfolio")}
            >
              Works
            </button>
          </li>
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
