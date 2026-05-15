import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const NavBar = () => {
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

          <span>Jhon</span>
          <span>Logout</span>
          <span className="span-write">
            <Link className="write-link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
