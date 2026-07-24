import { Link } from 'react-router-dom';
import './Navbar.css';

export default function NavbarLogin() {
  return (
    <Link to="/login">
      <button className="navbar-login">
        Log In
      </button>
    </Link>
  );
}
