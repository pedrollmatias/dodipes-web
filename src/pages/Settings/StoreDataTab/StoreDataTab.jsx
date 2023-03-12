import StoreInfo from "./StoreInfo";
import StoreAddress from "./StoreAddress";
import StoreContact from "./StoreContact";

import Divider from "../../../components/UI/Divider";

const StoreDataTab = () => {
  return (
    <>
      <StoreInfo />
      <div className="my-4">
        <Divider />
      </div>
      <StoreAddress />
      <div className="my-4">
        <Divider />
      </div>
      <StoreContact />
    </>
  );
};

export default StoreDataTab;
