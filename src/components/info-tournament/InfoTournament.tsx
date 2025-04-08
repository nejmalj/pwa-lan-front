import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import IconText from "../icon-text/IconText";
import Calendar from "../icons/Calendar";
import Clock from "../icons/Clock";
import Location from "../icons/Location";
import Person from "../icons/Person";
import Trophy from "../icons/Trophy";

import "./InfoTournament.scss";

interface InfoTournamentProps {
  isRegistration?: boolean;
}

function InfoTournament({
  isRegistration
}: InfoTournamentProps) {
  const listInfos = [
    {
      icon: Calendar,
      label: "25 mai 2025"
    },
    {
      icon: Clock,
      label: "20h"
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
          <PrimaryButton>S'inscrire</PrimaryButton>
          <span>Déjà 6 équipes inscrites !</span>
        </div>
      )}
    </div>
  );
}

export default InfoTournament;
