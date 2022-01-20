import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const StoreInfoStep = ({ forwardStep, backStep }) => {
  return (
    <div className="py-5">
      <Form>
        <Form.Group className="mb-3" controlId="cpfCnpj">
          <Form.Label>CPF/CNPJ</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nome do estabelecimento</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="cpfCnpj">
          <Form.Label>Nome de usuário do estabelecimento</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <div className="d-flex justify-content-end mt-5">
          <div className="me-3">
            <Button className="px-5" variant="light" onClick={backStep}>
              Voltar
            </Button>
          </div>
          <Button className="px-5" variant="primary" onClick={forwardStep}>
            Avançar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StoreInfoStep;
