import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiInfo } from "react-icons/fi";

import User from "../User";

import ModalActionButton from "../../../components/UI/ModalActionButton";

const users = [
  {
    nickname: "Pedro Matias",
    username: "pedrollmatias",
  },
  {
    nickname: "Ane Hungaro",
    username: "anehc_96",
  },
  {
    nickname: "João Colen",
    username: "jv17colen",
  },
  {
    nickname: "Aloizio da Mata",
    username: "damata_ak_trovao",
  },
];

const UserSelectedAdvise = ({ nickname, username }) => {
  const storeName = "Restaurante Dona Vera";
  return (
    <div className="d-flex align-items-center text-danger">
      <div className="me-3">
        <FiInfo size={30} />
      </div>

      <span>
        <strong>{nickname}</strong> (@{username}) será o(a) novo(a)
        administrador(a) de <strong>{storeName}</strong>.
      </span>
    </div>
  );
};

const SelectUserStep = ({ forwardStep, handleHide }) => {
  const [userSelected, setUserSelected] = useState(null);
  const handleSelectUser = (user) => setUserSelected(user);

  return (
    <>
      <Modal.Body>
        {users.map((user) => (
          <div className="mb-4" key={user.username}>
            <User
              {...user}
              isSelectable={true}
              onClick={() => handleSelectUser(user)}
              selected={userSelected?.username === user.username}
            />
          </div>
        ))}

        {userSelected && (
          <div className="mt-4">
            <UserSelectedAdvise {...userSelected} />
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <ModalActionButton variant="light" onClick={handleHide} type="button">
          Cancelar
        </ModalActionButton>

        <ModalActionButton
          variant="primary"
          onClick={forwardStep}
          type="button"
          disabled={Boolean(!userSelected)}
        >
          Confirmar
        </ModalActionButton>
      </Modal.Footer>
    </>
  );
};

export default SelectUserStep;
