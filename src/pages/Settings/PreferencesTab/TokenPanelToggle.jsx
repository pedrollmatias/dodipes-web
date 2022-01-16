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

          <p class="text-muted">
            Para os clientes confirmarem o pedido, é necessário informar um
            Token, informado presencialmente no estabelecimento. Isso evita que
            pessoas fora do local realizem pedidos. Deve haver no
            estabelecimento um painel eletrônico mostrando o Token, que é
            disponibilizado pela plataforma web.
          </p>
        </div>
      </div>
    </>
  );
};

export default TokenPanelToggle;
