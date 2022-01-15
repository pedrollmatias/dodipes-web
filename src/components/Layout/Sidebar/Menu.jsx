import { FiGrid, FiTrello, FiMap, FiUsers } from "react-icons/fi";
import { IoQrCodeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdDesktopWindows } from "react-icons/md";

import MenuItem from "./MenuItem";

const menu = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: FiGrid,
  },
  {
    label: "Pedidos",
    link: "orders",
    icon: FiTrello,
  },
  {
    label: "Configurações",
    link: "settings",
    icon: IoSettingsOutline,
  },
  {
    label: "Cardápio",
    link: "menu",
    icon: FiMap,
  },
  {
    label: "Mesas & QR Codes",
    link: "seats-qr-codes",
    icon: IoQrCodeOutline,
  },
  {
    label: "Usuários",
    link: "users",
    icon: FiUsers,
  },
  {
    label: "Painel Token",
    link: "token-panel",
    icon: MdDesktopWindows,
  },
];

const Menu = () => {
  return (
    <div className="d-flex flex-column w-100">
      {menu.map(({ label, link, icon }) => (
        <div className="my-2" key={label}>
          <MenuItem label={label} link={link} icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
