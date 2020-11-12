import React from "react";
import BannerImage from "../assets/media/banner.jpg";

function Hero() {
  return (
    <div className="hero_sec">
      <div className="hero_sec__banner">
        <img src={BannerImage} alt="Banner" />
      </div>
    </div>
  );
}

export default Hero;
