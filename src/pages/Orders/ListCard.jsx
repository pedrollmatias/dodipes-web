import Card from "react-bootstrap/Card";

import Divider from "../../components/UI/Divider";
import OrderCard from "./OrderCard";

import classes from "./ListCard.module.scss";

const orders = [
  {
    title: "Filé com fritas",
    tableNumber: "12",
  },
  {
    title: "Coca-cola lata 350ml",
    tableNumber: "3",
  },
  {
    title: "Hamburguer de Siri",
    obs: "Sem siri",
    tableNumber: "9",
  },
  {
    title: "Lagosta grelhada",
    tableNumber: "45",
  },
];

const ListCardHeader = ({ title }) => {
  return (
    <>
      <div className={`${classes["card--list-header"]} px-3 py-2 w-100`}>
        <h5 className="m-0">
          <strong>{title}</strong>
        </h5>
      </div>
    </>
  );
};

const ListCard = ({ title }) => {
  return (
    <Card className={`${classes["card--list"]} d-flex flex-column h-100`}>
      <ListCardHeader title={title} />
      <div className="p-2 overflow-auto">
        {orders.map((order, index) => (
          <div className="my-2" key={index}>
            <OrderCard {...order} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ListCard;
