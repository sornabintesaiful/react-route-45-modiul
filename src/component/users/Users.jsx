import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css'

const Users = () => {
  const users = useLoaderData()

  console.log(users);
  return (
    <div>
      <h1>Our Users component</h1>
      <p>Users: {users.length} </p>
      <div className="users-container">
        {users.map(user => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;