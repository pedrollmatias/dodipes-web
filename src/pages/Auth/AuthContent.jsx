import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GoogleLogin } from "react-google-login";

import Divider from "../../components/UI/Divider";

import classes from "./AuthContent.module.scss";

const AuthTitle = () => (
  <h2 className={`${classes["auth-title"]} mb-0`}>
    <strong>Venha fazer parte da revolução.</strong>
  </h2>
);

const AuthSubtitle = () => (
  <h5 className={`${classes["auth-subtitle"]} mb-0`}>Como deseja continuar?</h5>
);

const AuthForm = () => {
  return (
    <Form>
      <Form.Control className="mb-4" type="email" placeholder="E-mail" />
      <Form.Control className="mb-4" type="password" placeholder="Senha" />
      <Button className="px-5 py-2 w-100" variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  );
};

const RegisterText = ({ onClick: handleContentChange }) => {
  return (
    <span>
      Não tem uma conta?
      <strong
        className={`${classes["register-link"]} ms-1`}
        onClick={handleContentChange}
      >
        Cadastre-se
      </strong>
    </span>
  );
};

const AuthContent = ({ onContentChange: handleContentChange }) => {
  const responseGoogle = () => {};

  return (
    <>
      <div className="mb-5">
        <AuthTitle />
      </div>

      <div className="mb-5">
        <AuthSubtitle />
      </div>

      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        className={`${classes["google-btn"]} d-flex justify-content-center px-4 py-1 w-100`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <div className="py-5">
        <Divider />
      </div>

      <div className="mb-5">
        <AuthForm />
      </div>

      <RegisterText onClick={handleContentChange} />
    </>
  );
};

export default AuthContent;
