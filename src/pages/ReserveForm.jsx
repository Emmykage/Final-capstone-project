import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { Form } from 'react-router-dom'


const ReserveForm = () => {
  const dispatch = useDispatch()
const motocycles = useSelector((state) => state.motocycles)
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
     <form onSubmit={handleSubmit}>
      <div>
     
        <label>Select Motocycle</label>
        <select className='model-selector'
        value={motocycles[0]}
        onChange={(e) =>{setModel(e.target.value)}}
        >
          <option>SELECT MOTOCYCLE </option>
          {motocycles.map(moto =>(
            <option key={moto.id} value={moto.id}>{moto.model}</option>
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