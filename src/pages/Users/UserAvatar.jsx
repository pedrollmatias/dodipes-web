import { MdCheck } from "react-icons/md";
import classes from "./UserAvatar.module.scss";

const UserAvatar = ({ nickname, selected = false }) => {
  const getNicknameInitials = (nickname) => {
    const firstLetter = 0;
    return nickname
      .split(" ")
      .map((name) => name.charAt(firstLetter))
      .join("")
      .substr(0, 2)
      .toUpperCase();
  };
  return (
    <div
      className={`${
        classes["user-avatar"]
      } d-flex justify-content-center align-items-center ${
        selected && classes.selected
      }`}
    >
      {selected ? (
        <MdCheck size={35} />
      ) : (
        <h4 className="m-0">{getNicknameInitials(nickname)}</h4>
      )}
    </div>
  );
};

export default UserAvatar;
