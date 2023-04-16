import "./navbar.css";
import logo from "../../assets/navbar/logo.png";
import home from "../../assets/navbar/home.png";
import contact from "../../assets/navbar/contact.png";
import service from "../../assets/navbar/service.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
          <p>Contec Contabilidade</p>
        </div>
        <div className="nav">
          <Link to="/">
            <img src={home} className="home" alt="" />
          </Link>
          <Link to="/service">
            <img src={service} alt="Service" />
          </Link>
          <Link to="/contact">
            <img src={contact} alt="Contact" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
