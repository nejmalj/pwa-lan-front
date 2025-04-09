import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import { Card } from "../../components/card/Card";
import InputText from "../../components/inputs/InputText";
import "./Register.scss";
import Navbar from "../../components/navbar/Navbar";
import PlayerForm from "../../components/player-form/PlayerForm";

interface Player {
  [key: string]: string;
  lastName: string;
  firstName: string;
  teamName: string;
  teamAcronyme: string;
  username: string;
  email: string;
  class: string;
  level: string;
}

function Register() {
  const [teamName, setTeamName] = useState("");
  const [teamAcronyme, setTeamAcronyme] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: 2 }, () => ({
      teamName: teamName,
      teamAcronyme: teamAcronyme,
      lastName: "",
      firstName: "",
      username: "",
      email: "",
      class: "",
      level: ""
    }))
  );

  const classOptions = useMemo(
    () => ({
      B1: "B1",
      B2: "B2",
      B3: "B3",
      M1: "M1",
      M2: "M2"
    }),
    []
  );

  const levelsOptions = useMemo(
    () => ({
      beginner: "Débutant",
      intermediate: "Moyen",
      advanced: "Confirmé",
      expert: "Expert"
    }),
    []
  );

  const handlePlayerChange = useCallback(
    (index: number, field: string, value: string) => {
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[index][field] = value;
        return updatedPlayers;
      });
    },
    []
  );

  const handleSetTeamName = useCallback((value: string) => {
    setTeamName(value);
    handlePlayerChange(0, "teamName", value);
  }, []);

  const handleSetTeamAcronyme = useCallback(
    (value: string) => {
      setTeamAcronyme(value.toUpperCase());
      handlePlayerChange(0, "teamAcronyme", value);
    },
    []
  );

  useEffect(() => {
    if (
      teamAcronyme.length > 0 &&
      teamAcronyme.length !== 3
    ) {
      setErrorMessage(
        "L'acronyme de l'équipe doit contenir exactement 3 caractères."
      );
    } else {
      setErrorMessage("");
    }
  }, [teamAcronyme]);

  const submitRegister = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const isPlayerValid = players.every((player) =>
        Object.values(player).every(
          (value) => value.trim() !== ""
        )
      );
      if (!isPlayerValid) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      console.log("Formulaire soumis avec succès !");
      console.log("Équipe :", { teamName, teamAcronyme });
      console.log("Joueurs :", players);
    },
    [players, teamName, teamAcronyme]
  );

  return (
    <>
      <Card>
        <h1 className="pageTitle">Inscription</h1>
        <div className="register-container">
          <div className="register-form">
            <h2>Equipe</h2>
            <form className="player-form">
              <div className="form-group">
                <InputText
                  type="text"
                  value={teamName}
                  placeholder="Nom de l'équipe"
                  onChange={(e) =>
                    handleSetTeamName(e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <InputText
                  type="text"
                  value={teamAcronyme}
                  placeholder="Acronyme de l'équipe"
                  onChange={(e) =>
                    handleSetTeamAcronyme(e.target.value)
                  }
                />
                {errorMessage && (
                  <p className="warning-message">
                    {errorMessage}
                  </p>
                )}
              </div>

              {players.map((player, index) => (
                <PlayerForm
                  key={index}
                  nbPlayer={index + 1}
                  player={player}
                  classOptions={classOptions}
                  levelsOptions={levelsOptions}
                  onLastNameChange={(value) =>
                    handlePlayerChange(
                      index,
                      "lastName",
                      value
                    )
                  }
                  onFirstNameChange={(value) =>
                    handlePlayerChange(
                      index,
                      "firstName",
                      value
                    )
                  }
                  onUsernameChange={(value) =>
                    handlePlayerChange(
                      index,
                      "username",
                      value
                    )
                  }
                  onEmailChange={(value) =>
                    handlePlayerChange(
                      index,
                      "email",
                      value
                    )
                  }
                  onClassSelect={(key) =>
                    handlePlayerChange(index, "class", key)
                  }
                  onLevelSelect={(key) =>
                    handlePlayerChange(index, "level", key)
                  }
                />
              ))}

              <PrimaryButton
                variant="primary"
                onClick={submitRegister}
              >
                S'inscrire
              </PrimaryButton>
            </form>
          </div>
        </div>
      </Card>
      <Navbar />
    </>
  );
}

export default Register;
