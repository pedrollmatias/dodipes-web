import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Content from "../Content/Content";
import SubHeader from "../SubHeader/SubHeader";
import Sidebar from "../Sidebar/Sidebar";

import classes from "./StoreLayout.module.scss";

const StoreLayout = () => {
  return (
    <>
      <div className={`${classes['container--store-layout']} d-flex flex-column`}>
        <Header />
        <SubHeader />
        <div className="d-flex flex-grow-1 overflow-auto">
          <Sidebar />
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </>
  );
};

export default StoreLayout;
