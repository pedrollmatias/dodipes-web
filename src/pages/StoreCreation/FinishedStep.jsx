import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BiStore } from "react-icons/bi";

import SectionTitle from "../../components/UI/SectionTitle";

const FinishedStep = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <div className="mb-5">
      <BiStore className="text-primary" size={170} />
      </div>
      <SectionTitle>Parabéns, seu estabelecimento foi criado!</SectionTitle>
      <p className="mb-5">
        Monte seu cardápio, inclua usuário para auxiliar na gestão, gere QR
        Codes para mesas, tudo de forma simplificada. Seja bem-vindo ao universo{" "}
        <strong>Dodipes!</strong>
      </p>
      <Link to="/store">
        <Button className="px-5" variant="primary" size="lg">
          Acessar estabelecimento
        </Button>
      </Link>
    </div>
  );
};

export default FinishedStep;
