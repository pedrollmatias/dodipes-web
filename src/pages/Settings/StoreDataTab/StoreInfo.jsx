import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SectionTitle from "../../../components/UI/SectionTitle";

const StoreInfo = () => {
  return (
    <>
      <SectionTitle marginBottom="mb-4">Informações</SectionTitle>

      <Form>
        <Form.Group className="mb-3" controlId="cpfCnpj">
          <Form.Label>CPF/CNPJ</Form.Label>
          <Form.Control type="text" value="00.107.691/0001-27" disabled />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Nome do estabelecimento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome que será exibido no app para clientes"
          />
        </Form.Group>

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

export default StoreInfo;
