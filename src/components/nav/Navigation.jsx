import React, { useState } from 'react'
import './nav.css'
// import logo from './bike.png'
import logo from './../../assets/img/bike.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Navaigation = () => {
  const [sidebar, setSidebar] = useState(false)


  const showMenu = ()=> setSidebar(!sidebar)
  return (
  
  <div className='nav-bar'>
    <div className='icon-div'>
      <GiHamburgerMenu className='icon' onClick={showMenu} />
    </div>
    <nav  className={sidebar ? 'nav-menu active' : 'nav-menu' }>
      <div className='icon-div'>
      <AiOutlineClose className='icon' onClick={showMenu} />
      </div>
      
     
      <div className='logo'>
         <img src={logo}/>
      </div>
    
      <ul className='nav-links'>
        <li><a href='#'>Motocyle</a></li>
        <li><a href='#'>Reserve form</a></li>
        <li> <a href='#'>Reservations</a></li>
        <li><a href='#'>New motocycle</a></li>
        <li><a href='#'>Delete</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navaigation