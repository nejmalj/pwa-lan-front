

import InputText from "../inputs/InputText";
import SelectList from "../selectList/SelectList";
import "./PlayerForm.scss";

interface PlayerFormProps {
    classOptions: { [key: string]: string };
    levelsOptions: { [key: string]: string };
    onClassSelect: (key: string) => void;
    onLevelSelect: (key: string) => void;
    onInputChange: (field: string, value: string) => void;
    nbPlayers?: number;
}

function PlayerForm({
    classOptions,
    levelsOptions,
    onClassSelect,
    onLevelSelect,
    onInputChange,
    nbPlayers
}: PlayerFormProps) {
    return (
        <>
            <h2>Joueur {nbPlayers}</h2>
            <div className="form-group">
                <InputText
                    type="text"
                    value=""
                    placeholder="Nom"
                    onChange={(e) => onInputChange("lastName", e.target.value)}
                />
            </div>
            <div className="form-group">
                <InputText
                    type="text"
                    value=""
                    placeholder="Prénom"
                    onChange={(e) => onInputChange("firstName", e.target.value)}
                />
            </div>
            <div className="form-group">
                <InputText
                    type="text"
                    value=""
                    placeholder="Pseudo"
                    onChange={(e) => onInputChange("username", e.target.value)}
                />
            </div>
            <div className="form-group">
                <InputText
                    type="email"
                    value=""
                    placeholder="Email"
                    onChange={(e) => onInputChange("email", e.target.value)}
                />
            </div>
            <div className="form-group">
                <SelectList
                    data={classOptions}
                    onClick={onClassSelect}
                    placeholder="Classe"
                />
            </div>
            <div className="form-group">
                <SelectList
                    data={levelsOptions}
                    onClick={onLevelSelect}
                    placeholder="Niveau"
                />
            </div>
        </>
    );
}

export default PlayerForm;