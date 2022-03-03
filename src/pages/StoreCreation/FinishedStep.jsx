import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import storeCreationConfirmationImg from "../../assets/store-creation-confirmation.jpg";
import classes from "./FinishedStep.module.scss";

const FinishedStep = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-6 px-5">
          <img
            className={classes["img--container"]}
            src={storeCreationConfirmationImg}
            alt="Cration confirmed"
          />
        </div>
        <div className="col-md-6 px-5">
          <h5 className={`${classes["tip-text"]} mb-5`}>
            Monte seu cardápio, inclua usuários para auxiliar na gestão, gere QR
            Codes para mesas, tudo de forma simplificada. Seja bem-vindo ao
            universo <strong>Dodipes!</strong>
          </h5>

          <Link to="/store">
            <Button className="px-5" variant="primary" size="lg">
              Acessar estabelecimento
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishedStep;
