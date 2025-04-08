import { Card } from "../../components/card/Card";
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
        <Card>{/* Ajouter la card jeu */}</Card>
      </div>
      <div>
        <h1>Les partenaires</h1>
        <Card>{/* Ajouter les partenaires */}</Card>
      </div>
    </div>
  );
}

export default Home;
