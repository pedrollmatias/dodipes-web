import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Settings = () => {
  return (
    <Container className="py-5">
      <Tabs
        fill
        justify
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="store-data" title="Dados do estabelecimento">
          Teste 1
        </Tab>
        <Tab eventKey="visual-id" title="Identidade visual">
          Teste 2222
        </Tab>
        <Tab eventKey="preferences" title="Preferências">
          Teste 333333333333
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Settings;
