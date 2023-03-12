import Form from "react-bootstrap/Form";

import SlideToggle from "../../../components/UI/SlideToggle";

const TokenPanelToggle = () => {
  return (
    <>
      <div className="d-flex">
        <Form.Group className="me-3" controlId="active">
          <SlideToggle />
        </Form.Group>

        <div className="d-flex flex-column">
          <span className="mb-3">
            <strong>
              Habilitar confirmação de pedido por Token em tempo real
            </strong>
          </span>

          <p className="text-muted">
            Para os clientes confirmarem o pedido, é necessária uma
            confirmação por Token, que é informado presencialmente pelo
            estabelecimento, normalmente em paineis e displays. Isso evita que
            pessoas fora do local realizem pedidos. O Token é gerado pelo Dodipes web.
          </p>
        </div>
      </div>
    </>
  );
};

export default TokenPanelToggle;
