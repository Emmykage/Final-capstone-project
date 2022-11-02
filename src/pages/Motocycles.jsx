
import React from 'react'
import Bikes from '../components/motocycles/motocycles'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchedMotocycles } from '../redux/motocycles/motocycles'

const Motocycles = () => {
  const motocycles = useSelector((state) => state.motocycles, shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchedMotocycles());
  }, []);

  return motocycles.length > 0 ? (
    <div className='sub-container'>
        <h2>Motocycles</h2>
      <div className='moto-contain'> 
     
      <ul>
        {motocycles.map((data) =>(
          <Bikes key={data.id} photo={data.avatar} model={data.model} description={data.description} id={data.id}/>
        )
        )}
      </ul>
    </div>
    </div>
  ) : (
    <div className='res-condition'>
       <h2> Motocycles </h2>
       <h3> Add Motocycle </h3>
      <div className='center-t'>
        <button className='reserve-btn' onClick={()=> navigate('/new')}>Make reservation</button>
      </div>
    </div>
  )
}

export default Motocycles