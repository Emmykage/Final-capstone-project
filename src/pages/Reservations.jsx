import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Reservation from '../components/Reservations/Reservation'
import { fetchReservation, getReservation } from '../redux/reservations/reservations'

const Reservations = () => {
  const  reservations = useSelector((state) => state.reservations)
  const dispatch = useDispatch();
  useEffect(()=>{
   
    dispatch(fetchReservation())
  })

  return reservations.length > 0 ? (
    <div className='sub-container'>
      <h2> My reservations </h2>

      <div className='res-contain'>
        <table>
      <thead>
        <tr><th>Bike model</th>
        <th>date</th>
        <th>city</th></tr>
      </thead>
        
      <tbody>

        {reservations.map((data, index) =>(
          <Reservation model={data.motorcycle.model} city={data.city} date={data.date} id={data.id} key={index}/>
        ))}
       </tbody>
       </table>
    </div>

</div>
  ): (
    <div> <h3> You are yet to make a reservation </h3></div>
  )}


export default Reservations