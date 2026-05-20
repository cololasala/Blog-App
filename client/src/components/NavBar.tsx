import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} width={120} alt="logo-image" />
        </div>
        <div className="links">
          <Link to="/" className="link">
            ART
          </Link>
          <Link to="/" className="link">
            SCIENCE
          </Link>
          <Link to="/" className="link">
            TECHNOLOGY
          </Link>
          <Link to="/" className="link">
            CINEMA
          </Link>
          <Link to="/" className="link">
            DESIGN
          </Link>
          <Link to="/" className="link">
            FOOD
          </Link>

          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
          <Link className="write-link" to="/write">
            <span className="span-write">Write</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
