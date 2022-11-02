import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import Motocycles from '../components/DeletePage'

import { fetchedMotocycles } from '../redux/motocycles/motocycles'
const Delete = () => {
  const dispatch = useDispatch()
  const motocycles = useSelector((state)=> state.motocycles)
  useEffect(()=>{
    dispatch(fetchedMotocycles())
  },[])
  return (


    
    <div className='sub-container'>
      <div className='del-contain'>
        <h2> Delete motocycle</h2>
        <ul>
          {motocycles.map((bike) =>(
          
            <Motocycles key={bike.id} id={bike.id}model={bike.model} avatar={bike.avatar} />
        
          ))}
        
        </ul>
      </div>
    </div>
  )
}

export default Delete