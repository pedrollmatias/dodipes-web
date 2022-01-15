import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import classes from "./MenuItem.module.scss";

const MenuItem = ({ label, link, icon: Icon }) => {
  return (
    <Link to={`/${link}`}>
      <Button
        className={` ${classes["btn--menu-item"]} d-flex  align-items-center w-100 px-4 py-2`}
        variant="light"
      >
        <Icon className="me-4" size={28} />
        <span>{label}</span>
      </Button>
    </Link>
  );
};

export default MenuItem;
