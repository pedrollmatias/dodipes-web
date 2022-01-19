import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import classes from "./OrderInfoCard.module.scss";

const OrderInfoCard = ({ amount, label, icon: Icon }) => {
  return (
    <Link to="/orders">
      <Card className="cursor-pointer grow">
        <div
          className={`${classes["card--order-info"]} d-flex align-items-center p-4`}
        >
          <Icon className="text-primary" size={35} />
          <h1 className="m-0 mx-5">
            <strong>{amount}</strong>
          </h1>
          <h5>{label}</h5>
        </div>
      </Card>
    </Link>
  );
};

export default OrderInfoCard;
