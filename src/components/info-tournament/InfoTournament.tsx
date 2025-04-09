import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import IconText from "../icon-text/IconText";
import Calendar from "../icons/Calendar";
import Clock from "../icons/Clock";
import Location from "../icons/Location";
import Person from "../icons/Person";
import Trophy from "../icons/Trophy";

import "./InfoTournament.scss";
import { useEffect, useState } from "react";

interface InfoTournamentProps {
  isRegistration?: boolean;
}

function InfoTournament({
  isRegistration
}: InfoTournamentProps) {
  const listInfos = [
    {
      icon: Calendar,
      label: "22 mai 2025"
    },
    {
      icon: Clock,
      label: "18h"
    },
    {
      icon: Location,
      label: "MyDigitalSchool"
    },
    {
      icon: Person,
      label: "Etudiants, professeurs, invités"
    },
    {
      icon: Trophy,
      label: "Tournoi suisse"
    }
  ];

  const [teamsCount, setTeamsCount] = useState<
    number | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Erreur lors de la récupération des équipes."
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTeamsCount(data.length);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div className="infosContainer">
      <h2 className="infosTitle">Rocket League</h2>
      <div className="infosList">
        {listInfos.map((info, index) => {
          return (
            <IconText
              key={index}
              Icon={info.icon}
              label={info.label}
            />
          );
        })}
      </div>
      {!isRegistration && (
        <div className="infosButtonContainer">
          <Link to="/register">
            <PrimaryButton>S'inscrire</PrimaryButton>
          </Link>
          {!loading && !error && teamsCount && (
            <>
              {teamsCount === 0 && (
                <span>
                  Fais partie de la première équipe à
                  t'inscrire !
                </span>
              )}
              {teamsCount === 1 && (
                <span>Une équipe est déjà inscrite !</span>
              )}
              {teamsCount > 1 && (
                <span>
                  Déjà {teamsCount} équipes inscrites !
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default InfoTournament;
