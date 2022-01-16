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
      {users.map((user) => (
        <div className="mb-4" key={user.username}>
          <UserRequest user={user} />
        </div>
      ))}
    </>
  );
};

export default UsersRequests;
