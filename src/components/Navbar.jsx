import React, { useState } from 'react';
import './Navbar.css';  
import logo from '../assets/MPLlogo.svg';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavClick(e, path) {
    nav(path);
    setIsMenuOpen(false); 
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div id="navBar" className='flex row space-between'>
      <img src={logo} id='mplLogo' alt="MPL Logo" />
      <div className="hamburgerMenu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="menuBox" className={`flex row centerVH ${isMenuOpen ? 'open' : ''}`}>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/home')}>Home</p>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/leaderboard')}>Leaderboard</p>
        {/* <p className='menuItem selectedMenuItem' onClick={(e) => handleNavClick(e, '/treasure-hunt')}>Treasure Hunt</p>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/jeopardy')}>Jeopardy</p>
        <p className='menuItem' onClick={(e) => handleNavClick(e, '/admin')}>Admin</p>
        <button className='btn accentShade' onClick={(e) => handleNavClick(e, '/teams')}>Teams</button> */}
      </div>
    </div>
  );
}
