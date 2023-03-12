import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import User from "./User";

import SlideToggle from "../../components/UI/SlideToggle";
import IconLabelButton from "../../components/UI/IconLabelButton";
import ChangeAdminModal from "./ChangeAdminModal/ChangeAdminModal";

const AdminTag = () => {
  return (
    <div className="d-flex align-items-center text-danger">
      <div className="me-3">
        <RiAdminFill size={30} />
      </div>
      <span>Administrador</span>
    </div>
  );
};

const UserActiveToggle = ({ active }) => {
  return <SlideToggle label="Ativo" checked={active} />;
};

const UserRow = ({ username, nickname, active, isAdmin }) => {
  const [changeAdminModalShow, setChangeAdminModalShow] = useState(false);

  const handleChangeAdminModalShow = () => setChangeAdminModalShow(true);
  const handleChangeAdminModalHide = () => setChangeAdminModalShow(false);

  return (
    <>
      <div className="row align-items-center w-100">
        <div className="col-md-4">
          <User username={username} nickname={nickname} />
        </div>

        <div className="col-md-4">
          {isAdmin ? <AdminTag /> : <UserActiveToggle active={active} />}
        </div>

        <div className="col-md-4">
          {isAdmin ? (
            <IconLabelButton
              icon={FiEdit}
              label="Alterar administração"
              size="sm"
              iconSize={22}
              onClick={handleChangeAdminModalShow}
            />
          ) : (
            <IconLabelButton
              icon={MdClose}
              label="Remover"
              variant="light"
              size="sm"
              iconSize={22}
              iconMargin="me-2"
            />
          )}
        </div>
      </div>

      <ChangeAdminModal
        show={changeAdminModalShow}
        handleHide={handleChangeAdminModalHide}
      />
    </>
  );
};

export default UserRow;
