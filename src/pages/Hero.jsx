import React, { useState } from "react";
import Button from "../components/Buttons/Button";
import img2 from "../assets/Group.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedln from "../assets/linkedln.png";
import twitter from "../assets/twitter.png";
import { LoginCard } from "../components/Card/Card";
// import Activites from "./Activites";


const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-d">
          <div className="hero-p">
            <p>
              <span>'Bridging</span> the gap inspiring with<span>future'</span>
            </p>
            <p className="hero-p2">
              ‘Fostering collaboration and innovation Ignite,where students and
              Alumni connect’.
            </p>
            <Button />
          </div>
          <div className="hero-img">
            <img className="Group" src={img2} alt="Group" />
          </div>
        </div>
        <div className="social-media-logos">
          <img src={linkedln} alt="ln" className="social-media-logo" />
          <img src={twitter} alt="twi" className="social-media-logo" />
          <img src={instagram} alt="insta" className="social-media-logo" />
        </div>
        {/* <Activites/> */}
      </div>
    </>
  );
};

export default Hero;
