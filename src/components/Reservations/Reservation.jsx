import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteReservation } from '../../redux/reservations/reservations'

const Reservation = (props) => {
  const dispatch = useDispatch()
    const {model , city, date, id, avatar } = props
    const handleDelete=()=>{
      dispatch(deleteReservation(id))
    }
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={avatar} />
      </div>
      <div className='card-details'>
        <h4>{ model }  </h4>
        {/* <h4> { city } </h4> */}
        <h5> { date } </h5>
        <div className='action-btns'>
          <span>{city}</span><button> Delete </button>
        </div>

      </div>
    </div>
   
    // <tr>
    // <td>{model}</td>
    // <td>{city}</td>
    // <td>{date}</td>
    // <td><button onClick={handleDelete}>delete</button></td>
    // </tr>
   
  )
}

export default Reservation