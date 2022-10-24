import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Delete = () => {
  const bikes = useSelector((state)=> state.bikes)
  const dispatch = useDispatch()

  const deleteBike = (id) =>{
    dispatch(removeBike(id))
  }
  return bikes.length > 0 (
    
    <h1>Delete bikes</h1>

    // <div className='sub-container'>
    //   <div className='delete_bike'>
    //     <h1>Delete: bike</h1>
    //     <ul>
    //       {bikes.map((bike)=>(
    //         <li key={bike.id}>
    //           <div>
    //             <img src={bike.photo} alt='motocycle'/>
    //           </div>
    //           <div>
    //            <p> {bike.model}</p>
    //           </div>
    //           <button type='button' onClick={deleteBike(bike.id)}></button>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
      
    // </div>
  )
}

export default Delete