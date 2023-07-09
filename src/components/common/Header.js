import React from "react";
import Logo from "../../assets/home/Logo White.svg";
import Button from "./reusable/Button";
import Vector from "../../assets/Vector.png";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  return (
    <div className="header">
      <img src={Logo} />
      <div className="navlink">
        <Link to='/'> About</Link>
        <Link to='/3d-studio'> 3D Studio</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/support'> Support</Link>
      </div>

      <Button onClick={()=>navigate('/login')} className="login-btn">
        <span>Login</span> 
        <img className="vector" src={Vector} />
      </Button>
    </div>
  );
}

export default Header;
