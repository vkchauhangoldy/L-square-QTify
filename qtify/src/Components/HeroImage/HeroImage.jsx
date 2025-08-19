import React from "react";
import "./HeroImage.css";
import HeroLogo from "../../UpperSecJSX/heroLogo";

const HeroImage = () => {
  return (
    <div className="heroimage">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div className="herologo">
        <HeroLogo />
      </div>
    </div>
  );
};

export default HeroImage;
