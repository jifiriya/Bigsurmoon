import React, { useState } from "react";
import CustomSlider from "../components/common/reusable/CustomSlider";
import Button from "../components/common/reusable/Button";
import Tick from "../assets/icons/Tick";



function Pricing() {
  const [value, setValue] = useState(50);

  const handleChange = ({ max }) => {
    setValue(max);
  };

  return (
    <div className="pricing">
      <div className="heading">
        <h2>Pricing</h2>
        <p>
          Our affordable pricing scales with your business. We don’t lock our
          features behind expensive plans. You get all the features on every
          plan.
        </p>
      </div>
      <div className="pricing-componenet">
        <div className="left">
          <h2>How Many 3D files Do You Have?</h2>
          <span>{value}</span>
          <div></div>
          <CustomSlider
            className="filterpopup-range singleRange"
            min={0}
            max={500}
            onChange={handleChange}
          />
          <p>If you have more than 500 files, get in touch.</p>
        </div>
        <div className="right">
          <div className="price">
            <span>$75</span>
            <p>per month</p>
          </div>
          <div className="line-heading">
            <div className="line"></div>
            <div>All Plans Include</div>
            <div className="line"></div>
          </div>

          <div className="details">
            <div>
              <div>
                <Tick className="tick" />
                3D Asset Management
              </div>
              <div>
                <Tick />
                Product variant support
              </div>
            </div>
            <div>
              <div>
                <Tick />
                QR code access to AR
              </div>
              <div>
                <Tick />
                Unlimited Animations
              </div>
            </div>
          </div>
          <Button className='button'>Start My Free Trial</Button>
        </div>

        
      </div>
    </div>
  );
}

export default Pricing;
