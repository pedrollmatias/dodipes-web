import StoreCard from "./StoreCard";

import SectionTitle from "../../components/UI/SectionTitle";

const stores = [
  {
    id: 1,
    name: "Restaurante Dona Vera",
    username: "restaurante_dona_vera",
    address: "Av. Alverenga Peixoto, 673 - Industrial",
  },
];

const Stores = () => {
  return (
    <>
      <SectionTitle className="mb-4">Meus estabelecimentos</SectionTitle>

      <div className="row">
        {stores.map((store) => (
          <div key={store.id} className="col">
            <StoreCard {...store} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Stores;
