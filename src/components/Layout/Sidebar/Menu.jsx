import { FiGrid, FiTrello, FiMap, FiUsers } from "react-icons/fi";
import { IoQrCodeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdDesktopWindows } from "react-icons/md";

import MenuItem from "./MenuItem";

const menu = [
  {
    label: "Dashboard",
    link: "/",
    icon: FiGrid,
  },
  {
    label: "Pedidos",
    link: "/",
    icon: FiTrello,
  },
  {
    label: "Configurações",
    link: "/",
    icon: IoSettingsOutline,
  },
  {
    label: "Cardápio",
    link: "/",
    icon: FiMap,
  },
  {
    label: "Mesas & QR Codes",
    link: "/",
    icon: IoQrCodeOutline,
  },
  {
    label: "Usuários",
    link: "/",
    icon: FiUsers,
  },
  {
    label: "Painel Token",
    link: "/",
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
