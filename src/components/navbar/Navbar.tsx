import "./Navbar.scss";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
        {/* <img src="/icons/home.svg" alt="Accueil" className="icon" /> */}
        <span>Accueil</span>
      </NavLink>

      <NavLink to="/inscription" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
        {/* <img src="/icons/edit.svg" alt="Inscription" className="icon" /> */}
        <span>Inscription</span>
      </NavLink>

      <NavLink to="/tournoi" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
        {/* <img src="/icons/tournament.svg" alt="Tournoi" className="icon" /> */}
        <span>Tournoi</span>
      </NavLink>

      <NavLink to="/resultats" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
        {/* <img src="/icons/results.svg" alt="Résultats" className="icon" /> */}
        <span>Résultats</span>
      </NavLink>
    </nav>
  );
}
