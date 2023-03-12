import Container from "react-bootstrap/Container";
import { BiStore } from "react-icons/bi";

import IconLabelButton from "../../components/UI/IconLabelButton";

import presentationImg from "../../assets/store-creation-presentation.png";

import classes from "./StoreCreationSuggestion.module.scss";
import { Link } from "react-router-dom";

const StoreCreationSuggestion = () => {
  return (
    <Container className="py-5 h-100">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-md-6 px-5">
          <img
            className={classes["img--container"]}
            src={presentationImg}
            alt="Digital restaurant"
          />
        </div>
        <div className="col-md-6 px-5">
          <h3 className="mb-3">
            <strong>
              Você ainda não está vinculado a nenhum estabelecimento.
            </strong>
          </h3>
          <h3 className="mb-5 text-primary">
            <strong>Que tal criar um?</strong>
          </h3>
          <Link to="/store-creation">
            <IconLabelButton
              icon={BiStore}
              label="Criar estabelecimento"
              className="text-primary px-5"
              size="lg"
              iconSize={30}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default StoreCreationSuggestion;
