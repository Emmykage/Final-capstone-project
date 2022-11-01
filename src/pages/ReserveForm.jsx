import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchedMotocycles } from '../redux/motocycles/motocycles'
// import { Form } from 'react-router-dom'


const ReserveForm = () => {
  const dispatch = useDispatch()
const motocycles = useSelector((state) => state.motocycles)
console.log(motocycles)
useEffect(()=>{
  dispatch(fetchedMotocycles());
}, []);
//  const user = useSelector((state) => state.user)
 const navigate = useNavigate();
const [city, setCity] = useState('')
const [date, setDate] = useState('')
const [model, setModel] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    const user_id = user.id
    const motorcycle_id = model.id

    const data = {user_id, motorcycle_id, date, city}
    dispatch(postReservation())
    // await sendReservation
    console.log(data)
    navigate( '/reservations')
  }
  return (

    
    <div className='sub-container'>
      <h2> Make Reservation</h2>
     <form onSubmit={handleSubmit}>
      <div>
     
        <label>Select Motocycle</label>
        <select className='model-selector'
        value={model}
        onChange={(e) =>{setModel(e.target.value)}}
        >
          <option>SELECT MOTOCYCLE </option>
          {motocycles.map(motocycle =>(
            <option key={motocycle.id} value={motocycle.id}>{motocycle.model}</option>
            // <option> bike two</option>
          ))}
        
        </select>
         
        </div>
        <div>
     
        <label>City</label>
        <input type='text' value={city}
        onChange={(e)=> {setCity(e.target.value)} }/>
         
        </div>
        <div>
     
     <label>Date</label>
     <input type='date' value={date}
     onChange={(e)=> {setDate(e.target.value)} }/>
      
     </div>

        {/* <div>
          
     
        <label>User name</label>
        <input type='text' value={user.name}/>
         </div> */}
         <input type='submit' value='make reservation' />
    </form> 
    </div>
   
    
  )
}

export default ReserveForm