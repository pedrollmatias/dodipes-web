import StoreLogo from "../../../assets/store-logo.png";

import classes from "./Brand.module.scss";

const Brand = () => {
  return (
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
  );
};

export default Brand;
