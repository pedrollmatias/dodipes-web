import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Stores from "./Stores";

const HomePage = () => {
  return (
    <Container className="py-5 min-height-100">
      <h4 className="mb-5">
        <strong>Bem-vindo, Pedro</strong>
      </h4>

      <Stores />

      <Link to="/store-creation">
        <Button className="mt-5">Store Creation</Button>
      </Link>
    </Container>
  );
};

export default HomePage;
