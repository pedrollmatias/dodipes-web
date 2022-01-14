import Menu from "./Menu";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Menu />
    </div>
  );
};

export default Sidebar;
