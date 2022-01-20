import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddressStep = ({ forwardStep, backStep }) => {
  return (
    <div className="py-5">
      <Form>
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="cep">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-md-8">
            <Form.Group className="mb-3" controlId="logradouro">
              <Form.Label>Logradouro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rua, Avenida, Praça, etc."
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="neighborhood">
              <Form.Label>Bairro</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="state">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="number">
              <Form.Label>Número</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="complement">
              <Form.Label>Complemento</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
        </div>

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

export default AddressStep;
