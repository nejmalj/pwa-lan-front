import House from "../icons/House";
import Registration from "../icons/Registration";
import Results from "../icons/Results";
import Tournament from "../icons/Tournament";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <House />
        <span>Accueil</span>
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <Registration />
        <span>Inscription</span>
      </NavLink>

      <NavLink
        to="/tournoi"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <Tournament />
        <span>Tournoi</span>
      </NavLink>

      <NavLink
        to="/resultats"
        className={({ isActive }) =>
          "nav-item" + (isActive ? " active" : "")
        }
      >
        <Results />
        <span>Résultats</span>
      </NavLink>
    </nav>
  );
}
