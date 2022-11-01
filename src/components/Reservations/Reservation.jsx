import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteReservation } from '../../redux/reservations/reservations'

const Reservation = (props) => {
  const dispatch = useDispatch()
    const {model , city, date, id } = props
    const handleDelete=()=>{
      dispatch(deleteReservation(id))
    }
  return (
    
   
    <tr>
    <td>{model}</td>
    <td>{city}</td>
    <td>{date}</td>
    <td><button onClick={handleDelete}>delete</button></td>
    </tr>
   
  )
}

export default Reservation