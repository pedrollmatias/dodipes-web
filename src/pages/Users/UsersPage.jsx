import Container from "react-bootstrap/Container";
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
      <SectionTitle>Usuários</SectionTitle>
      <Users />
    </Container>
  );
};

export default UsersPage;
