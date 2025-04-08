import "./Navbar.scss";

import { NavLink } from "react-router-dom";
import House from "../icons/House";
import Registration from "../icons/Registration";
import Results from "../icons/Results";
import Tournament from "../icons/Tournament";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <House />
        </div>
        <span>Accueil</span>
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <Registration />
        </div>
        <span>Inscription</span>
      </NavLink>

      <NavLink
        to="/tournoi"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <Tournament />
        </div>
        <span>Tournoi</span>
      </NavLink>

      <NavLink
        to="/resultats"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <div className="icon-wrapper">
          <Results />
        </div>
        <span>Résultats</span>
      </NavLink>
    </nav>
  );
}
