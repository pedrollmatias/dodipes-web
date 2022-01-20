import { AiOutlineUserAdd } from "react-icons/ai";
import { GoDeviceDesktop } from "react-icons/go";
import { CgBowl } from "react-icons/cg";

import SectionTitle from "../../components/UI/SectionTitle";
import QuickAccessButton from "./QuickAccessButton";

const quickAccessButton = [
  {
    label: "Convidar usuário",
    icon: AiOutlineUserAdd,
    link: "/store/dashboard",
  },
  {
    label: "Painel Token",
    icon: GoDeviceDesktop,
    link: "/store/token-panel",
  },
  {
    label: "Adicionar Item",
    icon: CgBowl,
    link: "/store/menu",
  },
];

const QuickAccess = () => {
  return (
    <>
      <SectionTitle className="mb-3">Acesso rápido</SectionTitle>

      <div className="d-flex flex-wrap">
        {quickAccessButton.map((quickAccessButton) => (
          <div className="me-4 my-3" key={quickAccessButton.label}>
            <QuickAccessButton {...quickAccessButton} />
          </div>
        ))}
      </div>
    </>
  );
};

export default QuickAccess;
