import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterTitle = () => (
  <h2 className="mb-0">
    <strong>Registre-se</strong>
  </h2>
);

const RegisterForm = ({ onCancel: handleContentChange }) => {
  return (
    <Form>
      <Form.Control className="mb-4" type="text" placeholder="Nome" />
      <Form.Control className="mb-4" type="text" placeholder="Sobrenome" />
      <Form.Control className="mb-4" type="email" placeholder="E-mail" />
      <Form.Control className="mb-4" type="password" placeholder="Senha" />
      <Form.Control
        className="mb-4"
        type="password"
        placeholder="Confirmar senha"
      />

      <div className="mb-4">
        <Button className="px-5 py-2 w-100" variant="primary" type="submit">
          Entrar
        </Button>
      </div>
      <Button
        className="px-5 py-2 w-100"
        variant="light"
        onClick={handleContentChange}
      >
        Cancelar
      </Button>
    </Form>
  );
};

const RegisterContent = ({ onContentChange: handleContentChange }) => {
  return (
    <>
      <div className="mb-5">
        <RegisterTitle />
      </div>

      <RegisterForm onCancel={handleContentChange} />
    </>
  );
};

export default RegisterContent;
