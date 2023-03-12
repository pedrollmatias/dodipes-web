import GoogleAuth from "./GoogleAuth";

import Divider from "../../components/UI/Divider";
import classes from "./AuthContent.module.scss";
import AuthForm from "./AuthForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const AuthTitle = () => (
  <h3 className={`${classes["auth-title"]} text-center mb-0`}>
    <strong>Venha fazer parte da revolução.</strong>
  </h3>
);

const AuthSubtitle = () => (
  <h5 className={`${classes["auth-subtitle"]} text-center mb-0`}>
    Como deseja continuar?
  </h5>
);

const RegisterText = ({ onClick: handleContentChange }) => {
  const { disableAuthSubmit, loadingAuth } = useContext(AuthContext);
  const disableRegistration = disableAuthSubmit || loadingAuth;

  const registerText = "Cadastre-se";

  return (
    <div className="d-flex justify-content-center">
      <span className="me-1">Não tem uma conta?</span>

      <strong
        className={` ${
          disableRegistration ? "text-muted" : "text-primary cursor-pointer"
        }`}
        onClick={disableRegistration ? undefined : handleContentChange}
      >
        {registerText}
      </strong>
    </div>
  );
};

const AuthContent = ({ onContentChange: handleContentChange }) => {
  return (
    <>
      <div className="mb-5">
        <AuthTitle />
      </div>

      <div className="mb-5">
        <AuthSubtitle />
      </div>

      <GoogleAuth />

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
