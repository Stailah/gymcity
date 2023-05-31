import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import whiteTick from "../../assets/whiteTick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-r">
        <span>Discover the benefits</span>
        <div>
          <span className="stroke-text">why</span>
          <span> our services are the perfect choice</span>
        </div>

        <div className="details-r">
          <div>
            <img src={whiteTick} alt="" className="span" />
            <span>Unlock Your Potential with +120 Expert Coaches</span>
          </div>
          <div>
            <img src={whiteTick} alt="" className="span" />
            <span>Reach Your Goals Faster with Smarter Training</span>
          </div>
          <div>
            <img src={whiteTick} alt="" className="span" />
            <span>Experience the Difference with a Free Month Trial</span>
          </div>
          <div>
            <img src={whiteTick} alt="" className="span" />
            <span>Trustworthy Partners for Your Fitness Journey</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
