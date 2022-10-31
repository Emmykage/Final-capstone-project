import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import Motocycles from '../components/DeletePage'

import { deleteMotocycle, fetchedMotocycles } from '../redux/motocycles/motocycles'

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
  const motocycles = useSelector((state)=> state.motocycles)
  const dispatch = useDispatch()
  const handleDelete = (id) =>{
    dispatch(deleteMotocycle(id))
  }

console.log(motocycles)
  return (


    
    <div className='sub-container'>
      <div className='del-contain'>
        <h2> Delete motocycle</h2>
        <ul>
          {motocycles.map((bike) =>(
          
            <Motocycles key={bike.id} id={bike.id}model={bike.model} avatar={bike.avatar} handleDelete={handleDelete}  />
        
          ))}
        
        </ul>
      </div>
    </div>
  )
}

export default Delete