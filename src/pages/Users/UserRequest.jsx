import { MdClose, MdCheck } from "react-icons/md";

import User from "./User";

import IconLabelButton from "../../components/UI/IconLabelButton";

const UserRequest = ({ user }) => {
  return (
    <div className="row align-items-center w-100">
      <div className="col-md-4">
        <User {...user} />
      </div>

      <div className="col-md-8 d-flex">
        <div className="me-4">
          <IconLabelButton
            icon={MdCheck}
            label="Aceitar"
            size="sm"
            iconSize={22}
          />
        </div>
        <IconLabelButton
          icon={MdClose}
          label="Recusar"
          variant="light"
          size="sm"
          iconSize={22}
        />
      </div>
    </div>
  );
};

export default UserRequest;
