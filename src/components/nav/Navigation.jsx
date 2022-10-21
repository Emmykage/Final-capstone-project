import React from 'react'
import './nav.css'
// import logo from './bike.png'
import logo from './../../assets/img/bike.png'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navaigation = () => {
  const show = ()=>{
    let nav = document.querySelector('.navigation')
    nav.style.display = 'block'
  }
  return (
  
    <>
    <div className='icon-div'>
    <GiHamburgerMenu className='icon' onClick={show} />

  </div>
    <div className='navigation'>
     
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
    </div>
    </>
  )
}

export default Navaigation