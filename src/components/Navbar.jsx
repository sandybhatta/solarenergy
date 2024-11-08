import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showMoreLinks, setShowMoreLinks] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State for mobile menu toggle

  const toggleMoreLinks = () => {
    setShowMoreLinks((prevState) => !prevState);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const isActive = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#ff6347' : '#ffffff',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <>
      <nav className="navigation">
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <i className={`bx ${showMenu ? 'bx-x' : 'bx-menu'}`}></i>
        </div>

        {/* Background overlay for mobile menu */}
        {showMenu && <div className="menu-overlay" onClick={toggleMenu}></div>}

        {/* Main Navigation Links */}
        <ul className={`nav-container ${showMenu ? 'show' : ''}`}>
          <li><NavLink to="/" style={isActive}>Home</NavLink></li>
          <li><NavLink to="/products" style={isActive}>Products</NavLink></li>
          <li><NavLink to="/contact-us" style={isActive}>Contact Us</NavLink></li>
          <li><NavLink to="/solar-saving-calculator" style={isActive}>Solar Saving Calculator</NavLink></li>

          {/* More Dropdown */}
          <li onClick={toggleMoreLinks} style={{ cursor: 'pointer' }}>
            More
            <i className="bx bx-chevron-down" style={{ color: '#f2ecec', marginLeft: '5px' }}></i>
          </li>

          {showMoreLinks && (
            <div className="more-option">
              <li><NavLink to="/Blog" style={isActive}>Blog</NavLink></li>
              <li><NavLink to="/FreeSolar" style={isActive}>Free Solar</NavLink></li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
