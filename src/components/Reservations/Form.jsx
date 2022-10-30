import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Form = (props) => {
    const {name} = props
    const user = useSelector((state) => state.user)
    const [date, setDate ] = useState('')
    const [city, setCity] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();

        showForm()
        const data = {name, date, city}
        dispatch(postReservation(data))
     
        
      }
  return (
    <form>
        <form onSubmit={handleSubmit}>
      <div>
     
        <label>Select Motocycle</label>
       
         <input type='text' value={name} readOnly/>
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
    </form>
  )
}

export default Form