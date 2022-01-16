import UserRow from "./UserRow";

const users = [
  {
    nickname: "Pedro Matias",
    username: "pedrollmatias",
    isAdmin: true,
    active: true,
  },
  {
    nickname: "Ane Hungaro",
    username: "anehc_96",
    isAdmin: false,
    active: true,
  },
  {
    nickname: "João Colen",
    username: "jv17colen",
    isAdmin: false,
    active: true,
  },
  {
    nickname: "Aloizio da Mata",
    username: "damata_ak_trovao",
    isAdmin: false,
    active: true,
  },
  {
    nickname: "Bruno Flisch",
    username: "brunoflisch",
    isAdmin: false,
    active: false,
  },
];

const Users = () => {
  return (
    <>
      {users.map((user) => (
        <div className="mb-4" key={user.username}>
          <UserRow {...user} />
        </div>
      ))}
    </>
  );
};

export default Users;
