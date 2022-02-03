import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import Divider from "../../UI/Divider";

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

const UserProfileMenu = () => (
  <Dropdown>
    <Dropdown.Toggle variant="light" id="user-profile">
      <FiUser size={30} />
      <span className="px-3">Pedro Matias</span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {userMenu.map((menuItem) => (
        <Dropdown.Item
          className={`${classes["dropdown-item--user-profile-menu"]} p-3`}
          as={NavLink}
          to={menuItem.path}
          key={menuItem.path}
        >
          {menuItem.isButton ? (
            <Button variant="primary">{menuItem.label}</Button>
          ) : (
            menuItem.label
          )}
        </Dropdown.Item>
      ))}
      <Divider />
      <div className="d-flex align-items-center cursor-pointer p-3">
        <BiLogOut className="me-3" />
        <span>Sair</span>
      </div>
    </Dropdown.Menu>
  </Dropdown>
);

export default UserProfileMenu;
