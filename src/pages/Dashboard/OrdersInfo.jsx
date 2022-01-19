import { CgBowl } from "react-icons/cg";
import { GiBubblingBowl } from "react-icons/gi";
import { IoRestaurantOutline } from "react-icons/io5";

import OrderInfoCard from "./OrderInfoCard";

import SectionTitle from "../../components/UI/SectionTitle";

const ordersInfo = [
  {
    amount: 5,
    label: "Pedidos realizados",
    icon: IoRestaurantOutline,
  },
  {
    amount: 8,
    label: "Pedidos em preparação",
    icon: GiBubblingBowl,
  },
  {
    amount: 2,
    label: "Pedidos finalizados",
    icon: CgBowl,
  },
];

const OrdersInfo = () => {
  return (
    <>
      <SectionTitle className="mb-3">Pedidos</SectionTitle>
      <div className="d-flex flex-wrap">
        {ordersInfo.map((orderInfo) => (
          <div key={orderInfo.label} className="my-2 w-100">
            <OrderInfoCard {...orderInfo} />
          </div>
        ))}
      </div>
    </>
  );
};

export default OrdersInfo;
