import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { useApi } from "../../hooks/use-api";
import { getStoresByUser } from "../../services/store-service";

import Container from "react-bootstrap/Container";
import StoreCreationSuggestion from "./StoreCreationSuggestion";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

import Stores from "./Stores";

const SelectStoreTitle = () => {
  return (
    <div className="py-5">
      <h3>
        <strong>Selecione o estabelecimento</strong>
      </h3>
    </div>
  );
};

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { _id: userId } = user;

  const [{ result: stores, loading }, getStoresByUserApiCall] = useApi({
    service: getStoresByUser,
  });

  useEffect(() => {
    getStoresByUserApiCall({ userId });
  }, [getStoresByUserApiCall, userId]);

  return (
    <Container
      className={`${
        loading && "d-flex justify-content-center align-items-center"
      } py-5 min-height-100`}
    >
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <LoadingSpinner size="lg" />
        </div>
      )}

      {Boolean(!loading && stores && stores.length) && (
        <div className="d-flex flex-column align-items-center">
          <div className="mb-5">
            <SelectStoreTitle />
          </div>

          <Stores stores={stores} />
        </div>
      )}

      {Boolean(!loading && stores && !stores.length) && (
        <StoreCreationSuggestion />
      )}
    </Container>
  );
};

export default HomePage;
