import { NavLink } from "react-router-dom";

export const Navigation = (): JSX.Element => (
  <nav className="nav">
    <div className="nav__container container">
      <NavLink to="/" className="nav__logo">
        Portfolio
      </NavLink>
      <ul className="nav__menu">
        <li>
          <NavLink to="/portfolio" className="nav__link nav__link--btn">
            Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/#about" className="nav__link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/#contact" className="nav__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
