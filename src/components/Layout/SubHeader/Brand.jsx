import { Link } from "react-router-dom";
import StoreLogo from "../../../assets/store-logo.png";

import classes from "./Brand.module.scss";

const Brand = () => {
  return (
    <Link to="/store">
      <div className={classes.brand}>
        <img
          className={`${classes.logo} me-3`}
          alt="Brand store logo"
          src={StoreLogo}
        />

        <span className={classes.title}>
          <strong>Restaurante Dona Vera</strong>
        </span>

        <span className={`${classes.username} ms-4`}>
          @restaurante_dona_vera
        </span>
      </div>
    </Link>
  );
};

export default Brand;
