import React, { useState } from "react";
import './Home.css';
import img2 from "../../assets/Group.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedln from "../../assets/linkedln.png";
import twitter from "../../assets/twitter.png";
import Header from "../../components/Header/Header";
import NavComponent from "../../components/NavBar/NavComponent";
import Button from "../../components/Button/Button";
// import Activites from "./Activites";


const Home = () => {
  return (
    <>
      <NavComponent/>
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
          </div>
          <div className="hero-img">
            <img className="Group" src={img2} alt="Group" />
          </div>
        </div>
        <div>
          <Button/>
        </div>
        <div className="social-media-logos">
        <a href="https://www.linkedin.com/company/ignite-svuce/"
                target="_blank">
           <img src={linkedln} alt="ln" className="social-media-logo" />
          </a>
          <img src={twitter} alt="twi" className="social-media-logo" />
          <a href="https://www.instagram.com/ignite_svuce/?hl=en"
                target="_blank">
          <img src={instagram} alt="insta" className="social-media-logo" />
        </a>
        </div>
      </div>
    </>
  );
};

export default Home;
