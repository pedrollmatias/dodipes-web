import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { GoogleLogin } from "react-google-login";
import Divider from "../../components/UI/Divider";
import classes from "./AuthContent.module.scss";
import AuthForm from "./AuthForm";

const AuthTitle = () => (
  <h3 className={`${classes["auth-title"]} text-center mb-0`}>
    <strong>Venha fazer parte da revolução.</strong>
  </h3>
);

const AuthSubtitle = () => (
  <h5
    className={`${classes["auth-subtitle"]} text-center mb-0`}
  >
    Como deseja continuar?
  </h5>
);

const RegisterText = ({ onClick: handleContentChange, disableInteraction }) => {
  const registerText = "Cadastre-se";

  return (
    <div className="d-flex justify-content-center">
      <span className="me-1">Não tem uma conta?</span>
      {disableInteraction ? (
        <strong className="text-muted">{registerText}</strong>
      ) : (
        <strong
          className="text-primary cursor-pointer"
          onClick={handleContentChange}
        >
          {registerText}
        </strong>
      )}
    </div>
  );
};

const AuthContent = ({ onContentChange: handleContentChange }) => {
  const { login } = useContext(AuthContext);
  const [isLoadingGoogleAuth, setIsLoadingGoogleAuth] = useState(false);

  const responseGoogle = async (result) => {
    const { profileObj, tokenId } = result;
    const { email, familyName, givenName, imageUrl } = profileObj;
    const body = {
      email,
      name: { firstName: givenName, lastName: familyName },
      avatar: imageUrl,
    };

    try {
      await login({ body, token: tokenId });
    } catch (error) {
      setIsLoadingGoogleAuth(false);
    }
  };

  return (
    <>
      <div className="mb-5">
        <AuthTitle />
      </div>

      <div className="mb-5">
        <AuthSubtitle />
      </div>

      <GoogleLogin
        clientId="388487231503-1p8mnvgc2aik7u5f1p65olm03g3id493.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        className={`${classes["google-btn"]} d-flex justify-content-center px-4 py-1 w-100`}
        onSuccess={responseGoogle}
        onFailure={() => setIsLoadingGoogleAuth(false)}
        onRequest={() => setIsLoadingGoogleAuth(true)}
        cookiePolicy={"single_host_origin"}
        disabled={isLoadingGoogleAuth}
      />

      <div className="py-5">
        <Divider />
      </div>

      <div className="mb-5">
        <AuthForm disableInteraction={isLoadingGoogleAuth} />
      </div>

      <RegisterText
        onClick={handleContentChange}
        disableInteraction={isLoadingGoogleAuth}
      />
    </>
  );
};

export default AuthContent;
