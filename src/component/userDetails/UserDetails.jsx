import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>User Details components</h2>
      <p>User Name: {name}</p>
      <p> {website}</p>
    </div>
  );
};

export default UserDetails;