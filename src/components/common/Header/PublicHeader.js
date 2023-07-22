import React,{useState} from "react";
import Logo from "../../../assets/home/Logo White.svg";
import Button from "../reusable/Button";
import Vector from "../../../assets/Vector.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PublicSidenav from "./PublicSidenav";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);


  const closeSidenav = (e) => {
    e.preventDefault();
    setShowMenu(false);
    
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    
  };

  return (
    <>
    <div className="header">
    <div
          className={`hamburger-menu ${showMenu ? "show-menu" : ""}`}
          onClick={handleToggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      <img onClick={() => navigate("/")} src={Logo} />
      <div className="navlink">
        <Link to="/"> Home</Link>
        <div className="dropdown">
          <a>About</a>
          <div class="dropdown-content">
            <Link to="/about-ar">AR</Link>
            <Link to="/configurator">3D Configurator</Link>
          </div>
        </div>
        <Link to="/3d-studio"> 3D Studio</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/support"> Support</Link>
      </div>
      

      <Button onClick={() => navigate("/login")} className="login-btn">
        <span>Login</span>
        <img className="vector" src={Vector} />
      </Button>
    </div>
    <PublicSidenav showMenu={showMenu} closeSidenav={closeSidenav} />
    </>
  );
}

export default Header;
