import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Logo from "./Logo";
import UserProfileMenu from "./UserProfileMenu";
import { AuthContext } from "../../../contexts/auth-context";
import classes from "./Header.module.scss";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={`${classes.header} d-flex align-items-center`}>
      <Container className="d-flex justify-content-between">
        <Logo />
        {user && <UserProfileMenu />}
      </Container>
    </div>
  );
};

export default Header;
