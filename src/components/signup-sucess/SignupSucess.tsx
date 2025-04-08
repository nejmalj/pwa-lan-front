import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import { Card } from "../card/Card";
import "./SignupSucess.scss";

export default function SignupSucess() {
  return (
    <div className="signupSucess">
      <Card>
        <p>
          Ton inscription a bien été prise en compte !
          <br></br>
          Bonne chance !
        </p>
        <PrimaryButton size="md" variant="primary">
          Retour à l'acceuil
        </PrimaryButton>
      </Card>
    </div>
  );
}
