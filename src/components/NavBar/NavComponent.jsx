import React, { useState } from "react";
import "./navbar.css";
import img1 from '../../assets/ignite.png'
import {
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";



const NavComponent = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img className="logo" src={img1} alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul className="for-list">
            <li>
              <Link className="for-list-items" to="/">Home</Link>
            </li>
            <li>
              <Link className="for-list-items" to="/activities">Activities</Link>
            </li>
            <li>
              <Link className="for-list-items" to="/teams">Teams</Link>
            </li>
            <li>
              <Link className="for-list-items" to="/contact">contact</Link>
            </li> 
            <li>
              <Link className="for-list-items" to='/gallery'>Gallery</Link>
            </li>
          </ul>
        
         </div>

        {/* 3rd social media links */}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_blank">
                <FaTwitterSquare className="twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ignite_svuce/?hl=en"
                target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/ignite-svuce/"
                target="_blank">
                <FaLinkedin className="linkedin"/>
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
        
      </nav>
    </>
  );
};

export default NavComponent;