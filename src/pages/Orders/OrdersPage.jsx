import Container from "react-bootstrap/Container";

import ListCard from "./ListCard";

import SectionTitle from "../../components/UI/SectionTitle";

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
    <Container className="p-4 h-100" fluid>
      <div className="d-flex flex-column h-100">
        <SectionTitle className="mb-4">Pedidos</SectionTitle>
        <div className="row flex-grow-1">
          {lists.map((list) => (
            <div key={list.title} className="px-2 col">
              <ListCard {...list} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OrdersPage;
