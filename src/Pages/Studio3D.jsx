import React from "react";
import sofa from "../assets/3DStudio/sofa.png";
import Logo2 from "../assets/3DStudio/Logo(2).svg";
import Button from "../components/common/reusable/Button";
import Symbol from "../assets/3DStudio/Symbol 1.svg";
import temp1 from "../assets/3DStudio/temp1.png";
import temp2 from "../assets/3DStudio/temp2.png";
import temp3 from "../assets/3DStudio/temp3.png";
import Vector from "../assets/Vector.png";
import tableLamp from '../assets/3DStudio/Reference.gif';
import Light from '../assets/home/Light.png';
import writingpad from '../assets/3DStudio/writingpad.png';
import upload from '../assets/3DStudio/cloud.png'
import StudioSlider from "../components/common/reusable/3DStudioSlider";
import temp6 from '../assets/3DStudio/temp (6).png'
import attentionToDetail from '../assets/3DStudio/AttentiontoDetails.png'
import medal from '../assets/3DStudio/medal.png'
import Technical from '../assets/3DStudio/TechnicalCompetancy.png'
import Rectangle from '../assets/3DStudio/Rectangle 10.png'


function Studio3D() {
  return (
    <div className="studio">
      <div className="studio-main">
        <div >
         
          <span>3D Modelling</span>
          <br />
          <img src={Logo2} />
          <span> Solutions</span>
          <br />
          <span className="blue-text">Delivered!</span>
         
          <Button>Get in Touch</Button>
        </div>
        <img src={sofa} />
      </div>
       <div className="about-bigsurmoon">
        <h2>
          About Bigsurmoon <span className="blue-text">Studio</span>
        </h2>
        <p>
          At Bigsurmoon, we understand the significance of captivating visuals
          in today's digital world. Our expert team of skilled 3D artists and
          designers harness the power of advanced technologies to transform your
          products into stunning, interactive 3D models. By leveraging the
          latest augmented reality and 360 visualization techniques, we create
          realistic representations that allow your customers to explore and
          interact with your products in ways never before possible.
        </p>
      </div>
      <div className="special-about-us">
        <div>
          <h1>WHAT’S SPECIAL ABOUT US</h1>
        </div>
        <div className="components">
          <div className="component-elements">
            <img src={Symbol} className="image-studio" />
            <h2>Highly Optimised</h2>
            <p>
              With years of experience, we provide highly optimized files for
              fast loading and seamless user experience
            </p>
          </div>
          <div className="component-elements">
           <div className="image-container">
            <img src={attentionToDetail} className="img-1" />
            <img src={Rectangle} className="img-2" />
           </div>
            <h2>Attention to Detail</h2>
            <p>
              We study your product like it was made from beginning. Each detail
              your product has is represented exactly
            </p>
          </div>
          <div className="component-elements">
          <div className="image-container">
            <img src={medal} className="img-1 img-m" />
            <img src={Rectangle} className="img-2 " />
           </div>
            <h2>Quality, TAT & Delivery</h2>
            <p>
              Assured quality because of proficiency and experience and quick
              TAT assuring on-time delivery
            </p>
          </div>
          <div className="component-elements">
          <div className="image-container">
            <img src={Technical} className="img-1 img-t" />
            <img src={Rectangle} className="img-2" />
           </div>
            <h2>Technical Competency</h2>
            <p>
              Technically qualified team in various mfg. technologies, ensuring
              exceptional expertise{" "}
            </p>
          </div>
        </div>
        <StudioSlider />
      </div>
     <div className="studio-details">
        <div className="detail-component">
          
            <img src={temp1} />
          
          <div>
            <h2>Dedicated Support Team</h2>
            <p>
              With our dedicated support team to meet all your queries
              throughout, we value your input, ensuring your vision is
              accurately reflected in the final deliverables.
            </p>
          </div>
        </div>
        <div className="detail-component">
          <div>
            <h2>Scalability and Flexibility</h2>
            <p>
              Whether it's a single 3D model or a large-scale project, we have
              the expertise to meet your needs. Our team efficiently handles
              projects of all sizes, ensuring quality and timely delivery.
            </p>
          </div>
          
            <img src={temp6} />
          
        </div>
        <div className="detail-component">
          
            <img src={temp3} />
         
          <div>
            <h2>Streamlined Project Management</h2>
            <p>
              Our seamless project management solutions ensure efficient
              workflows from start to finish. With proven methodologies and
              expert coordination, we meet deadlines, maintain clear
              communication, and deliver exceptional results within budget.
            </p>
          </div>
        </div>
      </div>
       <div className="how-it-works">
        <div className="title">
          <h2>HOW IT WORKS</h2>
          <p>
            Our well-defined and efficient process ensures that projects are
            executed smoothly, deadlines are met, and the final deliverables
            align with our clients' visions.
          </p>
        </div>
        <div className="steps">
          <div className="steps-details">
            <div>
              <h2>Step 1: Provide Reference Materials</h2>
              <p>
                Provide us with product images, color variations and Product
                dimensions. That’s it,  from your end.
              </p>
            </div>
            <img src={tableLamp} className="table-lamb"/>
          </div>
          <div className="steps-details">
            <img src={Light}  className="guide-light"/>
            <div>
              <h2>Step 2: 3D Model Creation</h2>
              <p>
                We Analyse and study the images, create 3d model as provided
                informations. We also optimise the file heavily without losing
                quality.
              </p>
            </div>
          </div>
          <div className="steps-details">
            <div>
              <h2>Step 3: Quality check</h2>
              <p>
                We undergo a comprehensive and rigorous quality check,
                guaranteeing precise details and accurate texture
                representation.
              </p>
            </div>
            <img src={writingpad} />
          </div>
          <div className="steps-details">
            <img src={upload} />
            <div>
              <h2>Step 4: Upload</h2>
              <p>
                After your 3D model is prepared, we upload it to bigsurmoon
                platform, which can be effortlessly embedded on any website and
                also can be downloaded any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="get-quote">
        <div>
          <h2>Get Quote</h2>
          <p>
            Get in touch with us today to request a quote tailored to your
            needs, ask questions, or seek assistance.
          </p>
        </div>
        <Button className="button">
          <span>Get in Touch</span>
          <img className="vector" src={Vector} />
        </Button>
      </div>
    </div>
  );
}

export default Studio3D;
