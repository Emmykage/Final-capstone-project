import React from 'react'
import Reservation from '../components/Reservations/Reservation'


const reservations = [{
  model: 'toyo',
  city: 'nevada',
  date: '2022-10-24'
},
{
  model: 'toyo',
  city: 'nevada',
  date: '2022-10-24'
},
{
  model: 'toyo',
  city: 'nevada',
  date: '2022-10-24'
},
{
  model: 'toyo',
  city: 'nevada',
  date: '2022-10-24'
},
{
  model: 'toyo',
  city: 'nevada',
  date: '2022-10-24'
}]
const Reservations = () => {
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