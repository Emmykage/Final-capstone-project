import React, { useEffect } from 'react'
import Reservation from '../components/Reservations/Reservation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReservation } from '../redux/reservationReducer'
// const reservations = [{
//   name: 'toyo',
//   brand: 'toyota wheeler',
//   color: 'nevada',
//   date: '2022-10-24'
// },
// {
//   name: 'Hyunda',
//   brand: 'Hyundai alvero',
//   city: 'Las vegas',
//   date: '2022-10-24'
// },
// {
//   name: 'innoson',
//   brand: 'toyo',
//   city: 'nevada',
//   date: '2022-10-24'
// },
// {
//   model: 'toyo',
//   city: 'nevada',
//   date: '2022-10-24'
// },
// {
//   model: 'toyo',
//   city: 'nevada',
//   date: '2022-10-24'
// }]


const Reservations = () => {
  const dispatch = useDispatch();
  const {reservations} = useSelector((state) => state.reservation)
  useEffect(()=>{
    dispatch(fetchReservation)
  }, [] )
  // if(isLoading){
  //   return(
  //     <div><h1> Loading...</h1></div>
  //   )
  // }
  return (
    <div className='sub-container'>

      <div className='res-contain'>
        <table>
      <thead>
        <tr><th>Bike model</th>
        <th>date</th>
        <th>city</th></tr>
      </thead>
        
      <tbody>

        {reservations.map((data, index) =>(
          <Reservation model={data.model} city={data.city} date={data.date} key={index}/>
        ))}
       </tbody>
       </table>
    </div>

</div>
  )
}

export default Reservations