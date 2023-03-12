import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";

import GoogleLogin from "react-google-login";

import classes from "./GoogleAuth.module.scss";

const GoogleAuth = () => {
  const { loadingAuth, handleSignIn, setDisableAuthSubmit, disableAuthSubmit } =
    useContext(AuthContext);

  useEffect(() => {
    setDisableAuthSubmit(loadingAuth);
  }, [loadingAuth, setDisableAuthSubmit]);

  const handleGoogleAuth = async (result) => {
    setDisableAuthSubmit(true);

    const { profileObj, tokenId } = result;
    const { email, familyName, givenName, imageUrl } = profileObj;
    const body = {
      email,
      name: { firstName: givenName, lastName: familyName },
      avatar: imageUrl,
    };

    handleSignIn({ body, token: tokenId });

    setDisableAuthSubmit(false);
  };

  return (
    <>
      <GoogleLogin
        clientId="388487231503-1p8mnvgc2aik7u5f1p65olm03g3id493.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        className={`${classes["google-btn"]} d-flex justify-content-center px-4 py-1 w-100`}
        onRequest={() => setDisableAuthSubmit(true)}
        onSuccess={handleGoogleAuth}
        onFailure={() => setDisableAuthSubmit(false)}
        cookiePolicy={"single_host_origin"}
        disabled={disableAuthSubmit}
      />
    </>
  );
};

export default GoogleAuth;
