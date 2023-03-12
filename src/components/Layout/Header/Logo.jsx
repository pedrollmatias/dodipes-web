import { FiSlack } from "react-icons/fi";
import { Link } from "react-router-dom";

import classes from "./Logo.module.scss";

const Logo = () => (
  <Link to="/home">
    <div className={`${classes.logo} d-flex align-items-center`}>
      <FiSlack className="me-4" size={30} />
      <span className={classes.title}>
        <strong>Dodipes</strong>
      </span>
    </div>
  </Link>
);

export default Logo;
