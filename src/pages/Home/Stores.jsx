import StoreCard from "./StoreCard";

const Stores = ({ stores }) => {
  return (
    <div className="row">
      {stores.map((store) => (
        <div key={store._id} className="col">
          <StoreCard {...store} />
        </div>
      ))}
    </div>
  );
};

export default Stores;
