import { useContext } from "react";
import Container from "react-bootstrap/Container";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { LoadingContext } from "../../contexts/loading-context";

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
  const { isLoading } = useContext(LoadingContext);

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center h-100">
      <LoadingSpinner />
    </div>
  ) : (
    <Container className="py-5 min-height-100">
      <div className="d-flex flex-column align-items-center">
        <div className="mb-5">
          <SelectStoreTitle />
        </div>

        <Stores />
      </div>
    </Container>
  );
};

export default HomePage;
