// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';  // Create a separate CSS file for styling
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };
  
  const handleLinkClick = () => {
    setIsMobile(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="logo">SVUA</div>

      <div className={`menu ${isMobile ? 'active' : ''}`}>
        <Link className="link-for-data" to="/home" onClick={handleLinkClick}>Home</Link>
        <Link className="link-for-data" to="/activities" onClick={handleLinkClick}>Activities</Link>
        <Link className="link-for-data" to="/teams" onClick={handleLinkClick}>Teams</Link>
        <Link className="link-for-data" to="/contact" onClick={handleLinkClick}>Contact</Link>
        <Link className="link-for-data" to="/gallery" onClick={handleLinkClick}>Gallery</Link>
      </div>

      <div className="toggle-button" onClick={handleToggle}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
