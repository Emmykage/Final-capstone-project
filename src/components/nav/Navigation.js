import React, { useState } from 'react';
import './nav.css';
// import logo from './bike.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/bike.png';

const Navaigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showMenu = () => setSidebar(!sidebar);
  return (
    <div className="nav-bar">
      <div className="icon-div">
        <GiHamburgerMenu className="icon" onClick={showMenu} />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className="icon-div">
          <AiOutlineClose className="icon" onClick={showMenu} />
        </div>

        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/motocycles">Motocyle</NavLink></li>
          <li><NavLink to="/reserve_form">Reserve form</NavLink></li>
          <li><NavLink to="/reservations">Reservations</NavLink></li>
          <li><NavLink to="/new">New motocycle</NavLink></li>
          <li><NavLink to="#">Delete</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navaigation;
