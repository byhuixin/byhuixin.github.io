import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Navigation = (): JSX.Element => {
  const navigate = useNavigate();

  function handleNavClick(hash: string) {
    navigate(`/${hash}`);
  }

  function handleLogoClick(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="nav">
      <div className="nav__container container">
        <NavLink to="/" className="nav__logo-link" onClick={handleLogoClick}>
          <img src={logo} alt="HuiXin logo" className="nav__logo-image" />
        </NavLink>

        {/* Desktop pill group — hidden on mobile via CSS */}
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
      </div>
    </nav>
  );
};
