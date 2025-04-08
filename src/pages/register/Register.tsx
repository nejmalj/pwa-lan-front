import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import { Card } from "../../components/card/Card";
import InputText from "../../components/inputs/InputText";
import "./Register.scss";
import Navbar from "../../components/navbar/Navbar";
import PlayerForm from "../../components/player-form/PlayerForm";

function Register() {

    const nbPlayers = 2;

    const classOptions = {
        B1: "B1",
        B2: "B2",
        B3: "B3",
        M1: "M1",
        M2: "M2",
    };

    const levelsOptions = {
        beginner: "Débutant",
        intermediate: "Moyen",
        advanced: "Confirmé",
        expert: "Expert",
    };

    const handleClassSelect = (key: string) => {
        console.log(`Classe sélectionnée : ${key}`);
    };

    const handleLevelSelect = (key: string) => {
        console.log(`Niveau sélectionné : ${key}`);
    };

    const handleInputChange = (field: string, value: string) => {
        console.log(`${field} : ${value}`);
    };

    return (
        <>
            <Card>
                <h1 className="pageTitle">Inscription</h1>

                <div className="register-container">
                    <div>
                        {/* todo : add component Louize */}
                        <h1>Component Louize</h1>
                    </div>
                    <div className="register-form">
                        <h2>Equipe</h2>
                        <form className="player-form">

                            <div className="form-group">
                                <InputText
                                    type="text"
                                    value=""
                                    placeholder="Nom de l'équipe"
                                    onChange={() => console.log("")}
                                ></InputText>
                            </div>

                            {Array.from({ length: nbPlayers }).map((_, index) => (
                                <PlayerForm
                                    key={index}
                                    classOptions={classOptions}
                                    levelsOptions={levelsOptions}
                                    onClassSelect={(key) => handleClassSelect(key)}
                                    onLevelSelect={(key) => handleLevelSelect(key)}
                                    onInputChange={(field, value) => handleInputChange(field, value)}
                                    nbPlayers={index + 1}
                                />
                            ))}

                            <PrimaryButton variant="primary" size="lg">
                                S'inscrire
                            </PrimaryButton>
                        </form>
                    </div>
                </div>

                <Navbar />
            </Card>
        </>
    );
}

export default Register;