import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

import classes from "./OrderCard.module.scss";

const OrderCard = ({ title, obs, tableNumber, datetime }) => {
  return (
    <Card className={`${classes.card} cursor-pointer p-2`}>
      <h6>
        <strong>{title}</strong>
      </h6>

      <div className="mb-2">
        {obs ? (
          <small className="text-danger">
            <strong>{obs}</strong>
          </small>
        ) : (
          <small className="text-muted">Sem observações</small>
        )}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <Alert className="px-2 py-1 m-0">Mesa {tableNumber}</Alert>
        <span className="text-muted">18:54</span>
      </div>
    </Card>
  );
};

export default OrderCard;
