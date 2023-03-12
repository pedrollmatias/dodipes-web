import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../../contexts/auth";
import classes from "./UserProfileMenu.module.scss";

const userMenu = [
  {
    label: "Criar estabelecimento",
    path: "/store-creation",
    isButton: true,
  },
  {
    label: "Convites",
    path: "/user/invites",
  },
  {
    label: "Meus dados",
    path: "/user/account",
  },
];

const UserProfileMenu = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="user-profile">
        <FiUser size={30} />
        <span className="px-3">{`${user?.name?.firstName} ${user?.name?.lastName}`}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {userMenu.map((menuItem) => (
          <Dropdown.Item
            className={`${classes["dropdown-item--user-profile-menu"]} p-3`}
            as={NavLink}
            to={menuItem.path}
            key={menuItem.path}
          >
            {menuItem.label}
          </Dropdown.Item>
        ))}
        <div className="dropdown-divider" />
        <Dropdown.Item
          className="d-flex align-items-center p-3"
          onClick={handleSignOut}
        >
          <BiLogOut className="me-3" />
          <span>Sair</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserProfileMenu;
