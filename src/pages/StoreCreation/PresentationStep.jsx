import Container from "react-bootstrap/Container";
import { BiStore } from "react-icons/bi";

import IconLabelButton from "../../components/UI/IconLabelButton";

import presentationImg from "../../assets/store-creation-presentation.png";

import classes from "./PresentationStep.module.scss";

const PresentationStep = ({ forwardStep }) => {
  return (
    <Container className="py-5 h-100">
      <div
        className={`${classes["container--presentation"]} row align-items-center justify-content-center h-100`}
      >
        <div className="col-md-6 px-5">
          <img
            className={classes["img--presentation"]}
            src={presentationImg}
            alt="Restaurant digital order"
          />
        </div>
        <div className="col-md-6 px-5">
          <h1 className="mb-5">
            <strong>
              Feito para estabelecimentos{" "}
              <span className="text-primary">modernos</span>
            </strong>
          </h1>
          <IconLabelButton
            icon={BiStore}
            label="Criar estabelecimento"
            className="text-primary px-5"
            size="lg"
            iconSize={30}
            onClick={forwardStep}
          />
        </div>
      </div>
    </Container>
  );
};

export default PresentationStep;
