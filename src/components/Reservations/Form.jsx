import React, { useState } from 'react'
// import { useSelector } from 'react-redux';

const Form = (props) => {
  const user = localStorage.getItem('user')
    const {model, handleSubmit} = props
    // const user = useSelector((state) => state.user)
    const [date, setDate ] = useState('')
    const [city, setCity] = useState('')
console.log(model)
    // const handleSubmit = (e) =>{
    //     e.preventDefault();

    //     showForm()
    //     const data = {model, date, city}
    //     dispatch(postReservation(data))
     
        
    //   }
  return (
  
        <form onSubmit={(e) => handleSubmit(e, {user, date, city })}>
      <div>
     
        <label>Select Motocycle</label>
       
         <input type='text' value={model} readOnly/>
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

        <div>
          
         <label>User name</label>
        <input type='text' value={user}/>
         </div>
         <input type='submit' value='make reservation' />
    </form> 
  
  )
}

export default Form