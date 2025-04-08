import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import { Card } from "../../components/card/Card";
import InputText from "../../components/inputs/InputText";
import SelectList from "../../components/selectList/SelectList";
import NavBar from "../../components/navbar/Navbar";

import "./Register.scss";
import Navbar from "../../components/navbar/Navbar";

function Register() {
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
                        <form>

                            <div className="form-group">
                                <InputText
                                    type="text"
                                    value=""
                                    placeholder="Nom de l'équipe"
                                    onChange={() => console.log("")}
                                ></InputText>
                            </div>
                            <h2>Utilisateur</h2>
                            <div className="form-group">
                                <InputText
                                    type="text"
                                    value=""
                                    placeholder="Nom"
                                    onChange={() => console.log("nom")}
                                ></InputText>
                            </div>
                            <div className="form-group">
                                <InputText
                                    type="text"
                                    value=""
                                    placeholder="Prénom"
                                    onChange={() => console.log("prenom")}
                                ></InputText>
                            </div>
                            <div className="form-group">
                                <InputText
                                    type="text"
                                    value=""
                                    placeholder="Pseudo"
                                    onChange={() => console.log("Pseudo")}
                                ></InputText>
                            </div>
                            <div className="form-group">
                                <InputText
                                    type="email"
                                    value=""
                                    placeholder="Email"
                                    onChange={() => console.log("email")}
                                ></InputText>
                            </div>
                            <div className="form-group">
                                <SelectList
                                    data={classOptions}
                                    onClick={handleClassSelect}
                                    placeholder="Classe"
                                ></SelectList>
                            </div>
                            <div className="form-group">
                                <SelectList
                                    data={levelsOptions}
                                    onClick={handleLevelSelect}
                                    placeholder="Niveau"
                                ></SelectList>
                            </div>

                            <PrimaryButton variant="primary" size="lg">S'inscrire</PrimaryButton>
                        </form>
                    </div>
                </div>
            </Card>
            
            <Navbar />
        </>
    );
}

export default Register;