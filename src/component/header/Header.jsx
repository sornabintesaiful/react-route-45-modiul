import  './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <h2>NAVBER</h2>
      <nav className="nav">
        <Link to="/">HOme</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/users"> Users</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;