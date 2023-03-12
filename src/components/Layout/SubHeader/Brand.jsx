import { useContext } from "react";
import { StoreContext } from "../../../contexts";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Brand.module.scss";
import { useEffect } from "react";

const Brand = () => {
  const navigate = useNavigate();
  const { store } = useContext(StoreContext);

  useEffect(() => {
    if (!store) {
      navigate("/");
    }
  }, [store, navigate]);

  return (
    <Link to="/store">
      <div className={`${classes.brand} d-flex align-items-center`}>
        <img
          className={`${classes.logo} me-3`}
          alt="Brand store logo"
          src={store?.logo}
        />

        <span className={classes.title}>
          <strong>{store?.name}</strong>
        </span>

        <span className={`${classes.storename} ms-4`}>@{store?.storename}</span>
      </div>
    </Link>
  );
};

export default Brand;
