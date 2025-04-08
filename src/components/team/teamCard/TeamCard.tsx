import "./TeamCard.scss";

type Player = {
  name: string;
  promoName: string;
  levelName: string;
};

type TeamCardProps = {
  teamName: string;
  players: Player[];
};

const TeamCard = ({ teamName, players }: TeamCardProps) => {
  return (
    <div className="team-card">
      <h2 className="team-name">{teamName}</h2>
      {players.map((player, index) => (
        <div key={index} className="team-member">
          <p className="member-name">{player.name}</p>
          <p>{player.promoName}</p>
          <p>{player.levelName}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
