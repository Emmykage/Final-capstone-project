
import React from 'react'
import Bikes from '../components/motocycles/motocycles'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchedMotocycles } from '../redux/motocycles/motocycles'

const bikes = [{
  id: 1,
  model: 'Hyundai',
  color: 'black',
  photo: 'photo',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!'

},
{
  id: 2,
  model: 'Hyundai',
  color: 'black',
  photo: 'photo',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!'


},{
  id: 3,
  model: 'Hyundai',
  color: 'black',
  photo: 'photo',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!'

}]

const Motocycles = () => {
  const motocycles = useSelector((state) => state.motocycles, shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchedMotocycles());
  }, []);

  return (
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
  )
}

export default Motocycles