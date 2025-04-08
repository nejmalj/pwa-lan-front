import { useCallback, useMemo, useState } from "react";
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
  username: string;
  email: string;
  class: string;
  level: string;
}

function Register() {
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState<Player[]>(
    Array.from({ length: 2 }, () => ({
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
                    setTeamName(e.target.value)
                  }
                />
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

              <PrimaryButton variant="primary">
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
