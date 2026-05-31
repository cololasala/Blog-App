import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={Logo}
            width={120}
            alt="logo-image"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="links">
          <Link to="/art" className="link">
            ART
          </Link>
          <Link to="/science" className="link">
            SCIENCE
          </Link>
          <Link to="/technology" className="link">
            TECHNOLOGY
          </Link>
          <Link to="/cinema" className="link">
            CINEMA
          </Link>
          <Link to="/design" className="link">
            DESIGN
          </Link>
          <Link to="/food" className="link">
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
