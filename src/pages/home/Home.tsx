import { Card } from "../../components/card/Card";
import { GameCard } from "../../components/game-card/GameCard";
import InfoTournament from "../../components/info-tournament/InfoTournament";
import "./Home.scss";

function Home() {
  return (
    <div className="homeContainer">
      <div>
        <h1>Tournoi à venir</h1>
        <Card>
          <InfoTournament />
        </Card>
      </div>
      <div>
        <h1>Les jeux</h1>
        <GameCard
          title="Rocket League"
          description="Rocket League est un jeu où des voitures s'affrontent pour marquer des buts."
          imageUrl="/rl-card-image.jpg"
        />
      </div>
      <div>
        <h1>Les partenaires</h1>
        <Card>{/* Ajouter les partenaires */}</Card>
      </div>
    </div>
  );
}

export default Home;
