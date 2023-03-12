import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import classes from "./QuickAccessButton.module.scss";

const QuickAccessButton = ({ icon: Icon, label, link }) => {
  return (
    <Link to={link}>
      <Card className="cursor-pointer grow p-4">
        <div
          className={`${classes["container--quick-access"]} d-flex flex-column align-items-center`}
        >
          <Icon className="text-primary mb-4" size={50} />
          <span className="text-center">{label}</span>
        </div>
      </Card>
    </Link>
  );
};

export default QuickAccessButton;
