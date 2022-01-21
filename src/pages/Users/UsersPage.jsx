import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import SectionTitle from "../../components/UI/SectionTitle";
import Users from "./Users";
import UsersRequests from "./UsersRequests";

const UsersPage = () => {
  return (
    <Container className="py-5 min-height-100">
      <SectionTitle>Solicitações de usuários</SectionTitle>
      <div className="mb-5">
        <UsersRequests />
      </div>

      <div className="d-flex align-items-center mb-5">
        <SectionTitle className="mb-0 me-5">Usuários</SectionTitle>
        <Button>Convidar usuários</Button>
      </div>
      <Users />
    </Container>
  );
};

export default UsersPage;
