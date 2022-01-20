import Container from "react-bootstrap/Container";

import { BiStore } from "react-icons/bi";

import SectionTitle from "../../components/UI/SectionTitle";
import IconLabelButton from "../../components/UI/IconLabelButton";

import presentationImg from "../../assets/store-creation-presentation.png";

import classes from "./PresentationStep.module.scss";

const Footer = ({ forwardStep }) => {
  return (
    <div
      className={`${classes.footer} d-flex justify-content-center align-items-center flex-wrap p-5`}
    >
      <SectionTitle className="me-5 mb-0">Vamos começar?</SectionTitle>
      <IconLabelButton
        icon={BiStore}
        label="Criar estabelecimento"
        variant="light"
        className="text-primary px-5 bg-white"
        size="lg"
        iconSize={30}
        onClick={forwardStep}
      />
    </div>
  );
};

const PresentationStep = ({ forwardStep }) => {
  return (
    <div
      className={`${classes["container--presentation"]} d-flex flex-column h-100`}
    >
      <Container className="py-5 flex-grow-1">
        <h3 className="text-center mb-5">
          <strong>Bem vindo a criação de estabelecimento no Dodipes!</strong>
        </h3>

        <div className="row align-items-center">
          <div className="col-md-6 px-5">
            <img
              className={classes["img--presentation"]}
              src={presentationImg}
              alt="Restaurant digital order"
            />
          </div>
          <div className="col-md-6 px-5">
            <section>
              <p className="text-justify h4 mb-5">
                Tenha um cardápio digital simples e eficiente e melhore a
                experiência de pedidos de seus clientes.
              </p>
              <p className="text-justify h4">
                Utilizando o <strong>Dodipes</strong> para pedidos, você
                proporciona maior satisfação aos clientes e economiza custos
                operacionais.
              </p>
            </section>
          </div>
        </div>
      </Container>
      <Footer forwardStep={forwardStep} />
    </div>
  );
};

export default PresentationStep;
