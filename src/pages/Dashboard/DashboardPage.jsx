import Container from "react-bootstrap/Container";

import OrdersInfo from "./OrdersInfo";
import CategoriesInfo from "./CategoriesInfo";
import QuickAccess from "./QuickAccess";

const DashboardPage = () => {
  return (
    <Container className="py-5 min-height-100">
      <div className="mb-5">
        <QuickAccess />
      </div>

      <div className="row mb-5">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-4 mb-4 mb-sm-4 mb-lg-0">
          <OrdersInfo />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-8 ps-lg-5">
          <CategoriesInfo />
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;
