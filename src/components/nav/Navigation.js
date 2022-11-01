import React, { useState } from 'react';
import './nav.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import logo from './bike.png'

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/bike.png';

const Navaigation = () => {
  const user = localStorage.getItem('user')
  const activeLink = 'link-bg-color';
  const normalLink = '';

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
            <img src={logo} alt="logo" />

          </NavLink>
        </div>

        <ul className="nav-links">
          <h3> Hello {user}</h3>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/motocycles"
            >
              Motocyles
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/reserve_form"
            >
              Make Reservations
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/reservations"
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/new"
            >
              Add motocycle
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/delete"
            >
              Delete
            </NavLink>
          </li>
        </ul>

        <div className="social-icons">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaLinkedinIn /></span>
        </div>

      </nav>
    </div>
  );
};

export default Navaigation;
