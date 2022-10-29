import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
// import {useDispatch, useSelector} from 'react-redux'

const bikes = [{
  id: 1,
  model: 'Hyundai',
  color: 'black',
  photo: 'photo',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!'

},
{
  id: 2,
  model: 'Toyota',
  color: 'black',
  photo: 'photo',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!'


},{
  id: 3,
  model: 'Lexus',
  color: 'black',
  photo: 'photo',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!'

}]


const Delete = () => {
  // const bikes = useSelector((state)=> state.bikes)
  // const dispatch = useDispatch()
  // const handleDelete = () =>{
  //   dispatch(removeBike(id))
  // }
  return (


    
    <div className='sub-container'>
      <div className='del-contain'>
        <h2> Delete motocycle</h2>
        <ul>
          {bikes.map((bike) =>(
            
            <li key={bike.id}>
              <div className='image'>
                <img src={bike.avatar} alt='bike'/>
              </div>
              <div className='details'>
                <h3>{bike.model}</h3>
                <button onClick={handleDelete}><AiFillDelete/></button>
              </div>
           
          </li>



          ))}
        
        </ul>
      </div>

      {/* <h1>Delete bikes</h1>
      <div className='delete_bike'>
        <h1>Delete: bike</h1>
        <ul>
          {bikes.map((bike)=>(
            <li key={bike.id}>
              <div>
                <img src={bike.photo} alt='motocycle'/>
              </div>
              <div>
               <p> {bike.model}</p>
              </div>
              <button type='button' onClick={deleteBike(bike.id)}></button>
            </li>
          ))}
        </ul>
      </div> */}
      
    </div>
  )
}

export default Delete