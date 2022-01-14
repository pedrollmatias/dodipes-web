import Header from "./Header/Header";
import Content from "./Content/Content";
import SubHeader from "./SubHeader/SubHeader";
import Sidebar from "./Sidebar/Sidebar";

import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={`${classes.layout} d-flex flex-column`}>
      <Header />
      <SubHeader />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
