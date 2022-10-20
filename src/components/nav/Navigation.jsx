import React from 'react'
import './nav.css'
// import logo from './bike.png'
import logo from './../../assets/img/bike.png'
const Navaigation = () => {
  return (
    <div className='navigation'>
      <img src={logo}/>
      <ul className='nav-links'>
        <li>Motocyle</li>
        <li>Reserve form</li>
        <li>Reservations</li>
        <li>New motocycle</li>
        <li>Delete</li>
      </ul>
    </div>
  )
}

export default Navaigation