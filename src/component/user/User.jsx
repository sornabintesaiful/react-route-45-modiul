import { Link } from 'react-router-dom';
import './User.css';
const User = ({ user }) => {
  const { name, username, email, company, phone, id } = user;
  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone:{phone}</p>
      <Link to={`/user/${id}`} >Show Details</Link>
    </div>
  );
};

export default User;
