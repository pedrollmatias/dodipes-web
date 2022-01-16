import Container from "react-bootstrap/Container";
import ListCard from "./ListCard";

const lists = [
  {
    title: "Pedidos",
  },
  {
    title: "Preparação",
  },
  {
    title: "Finalizados",
  },
  {
    title: "Entregues",
  },
];

const OrdersPage = () => {
  return (
    <Container className="py-5 h-100" fluid>
      <div className="row h-100">
        {lists.map((list) => (
          <div key={list.title} className="px-2 col">
            <ListCard {...list} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OrdersPage;
