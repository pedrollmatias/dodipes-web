import { authUser, getUserByEmail } from "../services/user-serivce";
import { useContext, useEffect, useState } from "react";
import { useApi } from "./use-api";
import { ApiErrorContext } from "../contexts/api-error";

export const useAuthentication = () => {
  const accessTokenLocalStorage = localStorage.getItem("@dodipes:access-token");
  const userLocalStorage = localStorage.getItem("@dodipes:user-data");

  const { setError } = useContext(ApiErrorContext);
  const [authResponse, authUserApiCall] = useApi({ service: authUser });
  const [userResponse, getUserByEmailApiCall] = useApi({
    service: getUserByEmail,
  });

  const [loading, setLoading] = useState(false);
  const [signInData, setSignInData] = useState();
  const [accessToken, setAccessToken] = useState(accessTokenLocalStorage);
  const [user, setUser] = useState(JSON.parse(userLocalStorage));
  const [shouldSignOut, setShouldSignOut] = useState(false);

  useEffect(() => {
    const authResponseFailure = Boolean(
      authResponse.error && !authResponse.result && !authResponse.loading
    );
    const userResponseFailure = Boolean(
      userResponse.error && !userResponse.result && !userResponse.loading
    );

    if (authResponseFailure || userResponseFailure || shouldSignOut) {
      localStorage.removeItem("@dodipes:access-token");
      localStorage.removeItem("@dodipes:user-data");

      setAccessToken(undefined);
      setUser(undefined);
      setSignInData(undefined);
      setLoading(false);

      return;
    }

    const authUserPendingCall =
      !authResponse.error && !authResponse.result && !authResponse.loading;
    const authResponseSuccessful = Boolean(
      !authResponse.error && authResponse.result && !authResponse.loading
    );

    const getUserByEmailPendingCall = Boolean(
      !userResponse.error && !userResponse.result && !userResponse.loading
    );
    const userResponseSuccessful = Boolean(
      !userResponse.error && userResponse.result && !userResponse.loading
    );

    const shouldCallAuthUserApi = Boolean(
      signInData &&
        !user &&
        !accessToken &&
        authUserPendingCall &&
        getUserByEmailPendingCall
    );

    if (shouldCallAuthUserApi) {
      setLoading(true);

      const { body, token } = signInData;
      authUserApiCall({ body, token });
    }

    const shouldSetAccessToken = !accessToken && authResponseSuccessful;

    if (shouldSetAccessToken) {
      const acessTokenData = authResponse.result.accessToken;

      localStorage.setItem("@dodipes:access-token", acessTokenData);
      setAccessToken(acessTokenData);
    }

    const shouldCallGetUserByEmailApi =
      accessToken && !user && getUserByEmailPendingCall;

    if (shouldCallGetUserByEmailApi) {
      const { body } = signInData;
      const { email } = body;
      getUserByEmailApiCall({ email });
    }

    const shouldSetUser =
      accessToken && authResponseSuccessful && !user && userResponseSuccessful;

    if (shouldSetUser) {
      setLoading(false);

      localStorage.setItem(
        "@dodipes:user-data",
        JSON.stringify(userResponse.result)
      );
      setUser(userResponse.result);
    }
  }, [
    signInData,
    accessToken,
    user,
    authResponse,
    userResponse,
    authUserApiCall,
    getUserByEmailApiCall,
    shouldSignOut,
  ]);

  const handleSignIn = ({ body, token }) => {
    setShouldSignOut(false);
    setError(undefined);
    setAccessToken(undefined);
    setUser(undefined);
    setSignInData({ body, token });
  };

  const handleSignOut = () => {
    setShouldSignOut(true);
    setError(undefined);
    setAccessToken(undefined);
    setUser(undefined);
    setSignInData(undefined);
  };

  return { user, loading, handleSignIn, handleSignOut };
};
