import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { FiUser } from 'react-icons/fi';

const userMenu = [
  {
    label: 'Minha Conta',
    path: '/user/account',
  },
  // {
  //   label: 'Notificações',
  //   path: '/user/notifications',
  // },
  // {
  //   label: 'Meus anúncios',
  //   path: '/user/announcements',
  // },
  // {
  //   label: 'Mensagens',
  //   path: '/user/messages',
  // },
  // {
  //   label: 'Favoritos',
  //   path: '/user/favorites',
  // },
];

const UserProfileMenu = () => (
  <Dropdown>
    <Dropdown.Toggle variant="light" id="user-profile">
      <FiUser size={30} />
      <span className="px-3">Pedro Matias</span>
    </Dropdown.Toggle>

    <Dropdown.Menu className="p-3">
      {userMenu.map((menuItem) => (
        <Dropdown.Item className="px-3 py-2" as={NavLink} to={menuItem.path} key={menuItem.path}>
          {menuItem.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default UserProfileMenu;
