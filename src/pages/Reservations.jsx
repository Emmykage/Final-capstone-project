import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Reservation from '../components/Reservations/Reservation'
import { fetchReservation, getReservation } from '../redux/reservations/reservations'

const Reservations = () => {
  const  reservations = useSelector((state) => state.reservations)
  const navigate = useNavigate()
  console.log(reservations)
  const dispatch = useDispatch();
  useEffect(()=>{
   
    dispatch(fetchReservation())
  }, [])

  return reservations.length > 0 ? (
    <div className='sub-container'>
      <h2> My reservations </h2>

      <div className='res-contain'>
        {reservations.map((data, index) =>(
          <Reservation 
          model={data.motorcycle.model} 
          avatar={data.motorcycle.avatar}
          city={data.city}
           date={data.date} 
           id={data.id} 
           key={index}/>
        ))}
      
    </div>

</div>
  ): (
    <div className='res-condition'>
       <h2> My reservations </h2>
       <h3> You are yet to make a reservation </h3>
      <div className='center-t'>
        <button className='reserve-btn' onClick={()=> navigate('/reserve_form')}>Make reservation</button>
      </div>
    </div>
  )}


export default Reservations