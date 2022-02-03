import Container from "react-bootstrap/Container";

import classes from "./AuthPage.module.scss";
import AuthCard from "./AuthCard";

const AuthPage = () => {
  return (
    <div className={`${classes["auth--wrapper"]} overflow-auto h-100`}>
      <Container className="py-3 py-sm-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <AuthCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthPage;
