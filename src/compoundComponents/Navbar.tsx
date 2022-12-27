import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/slider">
                  Slider
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/color">
                  Color
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/grocery">
                  Grocery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/grocer">
                  Grocer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student">
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
