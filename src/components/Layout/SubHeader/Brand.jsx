import { useContext } from "react";
import { StoreContext } from "../../../contexts";
import { Link } from "react-router-dom";
import classes from "./Brand.module.scss";

const Brand = () => {
  const { store } = useContext(StoreContext);
  const { logo, storename, name } = store;

  return (
    <Link to="/store">
      <div className={classes.brand}>
        <img
          className={`${classes.logo} me-3`}
          alt="Brand store logo"
          src={logo}
        />

        <span className={classes.title}>
          <strong>{name}</strong>
        </span>

        <span className={`${classes.storename} ms-4`}>@{storename}</span>
      </div>
    </Link>
  );
};

export default Brand;
