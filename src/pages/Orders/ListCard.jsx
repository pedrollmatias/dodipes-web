import Card from "react-bootstrap/Card";

import Divider from "../../components/UI/Divider";
import OrderCard from "./OrderCard";

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
      <div className="p-3 w-100">
        <h5 className="m-0">
          <strong>{title}</strong>
        </h5>
      </div>
      <div className="px-3">
        <Divider />
      </div>
    </>
  );
};

const ListCard = ({ title }) => {
  return (
    <Card className={`d-flex flex-column h-100`}>
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
