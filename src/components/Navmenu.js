import React, { useState } from 'react';
import './navmenu.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='rig'>
        <h1>MATHI.G</h1>
        <h2>BE CSE</h2>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ol>
          <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#About" onClick={toggleMenu}>ABOUT</a></li>
          <li><a href="#Skill" onClick={toggleMenu}>SKILL</a></li>
          <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
          <li><a href="#resume" onClick={toggleMenu}>RESUME</a></li>
          <li onClick={toggleMenu}>MEDIA</li>
          <li onClick={toggleMenu}>PROJECT</li>
        </ol>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Navbar;
