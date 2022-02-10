import { Outlet } from "react-router-dom";

import Content from "../Content/Content";
import SubHeader from "../SubHeader/SubHeader";
import Sidebar from "../Sidebar/Sidebar";

const StoreLayout = () => {
  return (
    <>
      <SubHeader />
      <div className="d-flex flex-grow-1 overflow-auto">
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </div>
    </>
  );
};

export default StoreLayout;
