import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SectionTitle from "../../../components/UI/SectionTitle";

const StoreContact = () => {
  return (
    <>
      <SectionTitle marginBottom="mb-4">Contato</SectionTitle>

      <Form>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="primary">
              <Form.Label>Principal</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="secondary">
              <Form.Label>Secundário</Form.Label>
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

export default StoreContact;
