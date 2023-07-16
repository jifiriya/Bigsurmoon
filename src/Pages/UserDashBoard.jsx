import React from "react";
import PrivateHeader from "../components/common/Header/PrivateHeader";
import { Link } from "react-router-dom";
import Button from "../components/common/reusable/Button";
import Delete from "../assets/icons/Delete.js";
import Download from "../assets/icons/Download";
import Share from "../assets/icons/Share";
import Progressbar from "../components/common/reusable/ProgressBar";
import addnew from "../assets/dashboard/addnew.svg";
import upload from "../assets/dashboard/upload.svg";


function UserDashBoard() {
  
  const hiddenFileInput = React.useRef(null);

  
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <PrivateHeader />
      <div className="dashboard">
        <div className="dashboard-data">
          <div className="upload-buttons">
            <div className="button-container">
              <img src={addnew} alt="" />
              <div>
                <h4>New File</h4>
                <p>Design and Prototype</p>
              </div>
              <div>
              <button  className="uploadbutton"onClick={handleClick}>+</button>
              <input
                type="file"
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
                
              </div>
             
            </div>
            <div className="button-container">
              <img src={upload} alt="" />
              <div>
                <h4>Import File</h4>
                <p>import 3D file</p>
              </div>
              <button  className="uploadbutton"onClick={handleClick}>+</button>
              <input
                type="file"
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="table-data">
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>name</td>
                    <td>
                      <button className="custon-button">View</button>
                    </td>
                    <td>
                      <button className="custon-button">Edit</button>
                    </td>
                    <td>share Link</td>
                    <td>
                      <button>
                        <Share />
                      </button>
                    </td>
                    <td>
                      <button>
                        <Download />
                      </button>
                    </td>
                    <td>
                      <button>
                        <Delete />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>name</td>
                    <td>
                      <button className="custon-button">View</button>
                    </td>
                    <td>
                      <button className="custon-button">Edit</button>
                    </td>
                    <td>share Link</td>
                    <td>
                      <button>
                        <Share />
                      </button>
                    </td>
                    <td>
                      <button>
                        <Download />
                      </button>
                    </td>
                    <td>
                      <button>
                        <Delete />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>name</td>
                    <td>
                      <button className="custon-button">View</button>
                    </td>
                    <td>
                      <button className="custon-button">Edit</button>
                    </td>
                    <td>siframe sr= http://embed.ted.xyzqwertyuiopmbed:html</td>
                    <td>
                      <button>
                        <Share />
                      </button>
                    </td>
                    <td>
                      <button>
                        <Download />
                      </button>
                    </td>
                    <td>
                      <button>
                        <Delete />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashBoard;
