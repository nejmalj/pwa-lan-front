import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import { Card } from "../../components/card/Card";
import "./ConfirmRegister.scss";

export default function ConfirmRegister() {
  return (
    <div className="signupSucess">
      <Card>
        <p>
          Ton inscription a bien été prise en compte !
          <br></br>
          Bonne chance !
        </p>
        <PrimaryButton variant="primary">
          Retour à l'acceuil
        </PrimaryButton>
      </Card>
    </div>
  );
}
