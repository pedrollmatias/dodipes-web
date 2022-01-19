import { AiOutlineUserAdd } from "react-icons/ai";
import { GoDeviceDesktop } from "react-icons/go";
import { CgBowl } from "react-icons/cg";

import SectionTitle from "../../components/UI/SectionTitle";
import QuickAccessButton from "./QuickAccessButton";

const quickAccessButton = [
  {
    label: "Convidar usuário",
    icon: AiOutlineUserAdd,
    link: "/dashboard",
  },
  {
    label: "Painel Token",
    icon: GoDeviceDesktop,
    link: "/dashboard",
  },
  {
    label: "Adicionar Item",
    icon: CgBowl,
    link: "/dashboard",
  },
];

const QuickAccess = () => {
  return (
    <>
      <SectionTitle className="mb-3">Acesso rápido</SectionTitle>

      <div className="d-flex flex-wrap">
        {quickAccessButton.map((quickAccessButton) => (
          <div className="m-3" key={quickAccessButton.label}>
            <QuickAccessButton {...quickAccessButton} />
          </div>
        ))}
      </div>
    </>
  );
};

export default QuickAccess;
