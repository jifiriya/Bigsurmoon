import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Symbol from "../../../assets/3DStudio/Symbol 1.svg";

function StudioSlider() {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div style={{ width: "300px" }} className="studio-slider">
      <Slider {...Settings}>
        <div className="slider">
          <div>
            <img src={Symbol} />
            <h2>Highly Optimised</h2>
            <p>
              With years of experience, we provide highly optimized files for
              fast loading and seamless user experience
            </p>
          </div>
        </div>
        <div className="slider">
          <div>
            <img src={Symbol} />
            <h2>Attention to Detail</h2>
            <p>
              We study your product like it was made from beginning. Each detail
              your product has is represented exactly
            </p>
          </div>
        </div>
        <div className="slider">
          <div>
            <img src={Symbol} />
            <h2>Quality, TAT & Delivery</h2>
            <p>
              Assured quality because of proficiency and experience and quick
              TAT assuring on-time delivery
            </p>
          </div>
        </div>
        <div className="slider">
          <div>
            <img src={Symbol} />
            <h2>Technical Competency</h2>
            <p>
              Technically qualified team in various mfg. technologies, ensuring
              exceptional expertise{" "}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default StudioSlider;
