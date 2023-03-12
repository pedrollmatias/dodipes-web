import React from "react";
import Divider from "../../components/UI/Divider";

import UserRequest from "./UserRequest";

const users = [
  {
    nickname: "Karina Bernardoni",
    username: "ka_bernardoni_95",
  },
  {
    nickname: "Elise Hungaro",
    username: "lilisehc",
  },
];

const UsersRequests = () => {
  return (
    <>
      {users.map((user, index) => (
        <React.Fragment key={user.username}>
          <UserRequest user={user} />

          {index !== users.length - 1 && (
            <div className="my-3">
              <Divider />
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default UsersRequests;
