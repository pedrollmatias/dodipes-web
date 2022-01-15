import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import StoreDataTab from "./StoreDataTab/StoreDataTab";
import VisualIdentityTab from "./VisualIdentityTab/VisualIdentityTab";

const Settings = () => {
  return (
    <Container className="py-5">
      <Tabs
        fill
        justify
        defaultActiveKey="store-data"
        id="settings-tab"
        className="mb-3"
      >
        <Tab eventKey="store-data" title="Dados do estabelecimento">
          <div className="pt-3 pb-5">
            <StoreDataTab />
          </div>
        </Tab>
        <Tab eventKey="visual-id" title="Identidade visual">
          <div className="pt-3 pb-5">
            <VisualIdentityTab />
          </div>
        </Tab>
        <Tab eventKey="preferences" title="Preferências">
          <div className="pt-3 pb-5">{/* <StoreDataTab /> */}</div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Settings;
