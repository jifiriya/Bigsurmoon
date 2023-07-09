import React from "react";
import Button from "../components/common/reusable/Button";
import { useNavigate } from "react-router-dom";
import Chair from "../assets/Configurator/main.png";
import Configure from "../assets/Configurator/CONFIGUREICON.png";
import upload from "../assets/Configurator/UPLOADICON_3.png";
import publish from "../assets/Configurator/PUBLISHICON.png";

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
      <div className="upload">
        <div>
          <img src={upload} />
          <h2 className="upload blue-text">1.Upload</h2>
          <p>
            Seamlessly upload files and assets for integration into your
            project.
          </p>
        </div>
        <div>
          <img src={Configure} />
          <h2 className="blue-text">2.Configure</h2>
          <p>Customize every aspect with intuitive options.</p>
        </div>
        <div>
          <img src={publish} />
          <h2 className="blue-text">3.Publish</h2>
          <p>Share your creations with ease and make an impact.</p>
        </div>
      </div>
      <div className="configurator-detail">
        <div>
          <img />
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <img />
        </div>
        <div>
          <img />
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <img />
        </div>
        <div>
          <img />
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Congigurator;
