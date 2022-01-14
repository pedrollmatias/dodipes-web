import Container from "react-bootstrap/Container";

import Logo from "./Logo";

import classes from "./Header.module.scss";
import UserProfileMenu from "./UserProfileMenu";

const Header = () => (
  <div className={`${classes.header} d-flex align-items-center`}>
    <Container className="d-flex justify-content-between">
      <Logo />
      <UserProfileMenu />
    </Container>
  </div>
);

export default Header;
