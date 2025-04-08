import "./Navbar.scss";

import House from "../icons/House";
import { NavLink } from "react-router-dom";
import Registration from "../icons/Registration";
import Results from "../icons/Results";
import Tournament from "../icons/Tournament";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        <div className="icon-wrapper">
          <img src="/icons/house.svg" alt="Accueil" className="icon" />
        </div>
        <span>Accueil</span>
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        <div className="icon-wrapper">
          <img src="/icons/registration.svg" alt="Inscription" className="icon" />
        </div>
        <span>Inscription</span>
      </NavLink>

      <NavLink
        to="/tournoi"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        <div className="icon-wrapper">
          <img src="/icons/tournament.svg" alt="Tournoi" className="icon" />
        </div>
        <span>Tournoi</span>
      </NavLink>

      <NavLink
        to="/resultats"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        <div className="icon-wrapper">
          <img src="/icons/results.svg" alt="Résultats" className="icon" />
        </div>
        <span>Résultats</span>
      </NavLink>
    </nav>
  );
}
