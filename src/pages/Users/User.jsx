import { useState } from "react";
import UserAvatar from "./UserAvatar";

const User = ({
  username,
  nickname,
  isSelectable = false,
  selected = false,
  onClick = () => {},
}) => {
  return (
    <div
      className={`d-flex align-items-center ${
        isSelectable && "cursor-pointer"
      }`}
      onClick={onClick}
    >
      <div className="me-3">
        <UserAvatar nickname={nickname} selected={selected} />
      </div>

      <div className="d-flex flex-column">
        <h5 className="mb-1">{nickname}</h5>
        <span className="text-muted">
          <em>{`@${username}`}</em>
        </span>
      </div>
    </div>
  );
};

export default User;
