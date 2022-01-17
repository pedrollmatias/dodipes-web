import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SectionTitle from "../../../components/UI/SectionTitle";

const StoreAddress = () => {
  return (
    <>
      <SectionTitle className="mb-4">Endereço</SectionTitle>

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

        <div className="d-flex justify-content-end mt-4">
          <div className="me-3">
            <Button className="px-4" variant="light">
              Cancelar
            </Button>
          </div>
          <Button className="px-4" variant="primary" type="submit">
            Salvar alterações
          </Button>
        </div>
      </Form>
    </>
  );
};

export default StoreAddress;
