import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Content from "../Content/Content";

import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <>
      <div
        className={`${classes["container--main-layout"]} d-flex flex-column`}
      >
        <Header />
        <Content>
          <Outlet />
        </Content>
      </div>
    </>
  );
};

export default MainLayout;
