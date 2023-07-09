import React from "react";
import Button from "../components/common/reusable/Button";
import { useNavigate } from "react-router-dom";
import Chair from "../assets/Configurator/main.png";

function Congigurator() {
  const navigate = useNavigate();
  return (
    <div className="configurator">
      <div className="congigurator-main">
        <div className="main-content">
          <h2>
            Customization,
            <br /> Simplified
          </h2>
          <p>
            No-Code, No app required.
            <br />
            Completely web-based and easy-to-use.
          </p>
          <div>
            <Button onClick={() => navigate("/login")}>Start Trial</Button>
            <Button onClick={() => navigate("/login")}>Learn More</Button>
          </div>
        </div>
        <div>
          <img src={Chair} />
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Congigurator;
