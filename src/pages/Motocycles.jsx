
import React from 'react'
import Bikes from '../components/bikes/Bikes'
// import { useDispatch, useSelector, shallowEqual } from 'react-redux'


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
  // const motocycles = useSelector((state) => state.motocycles, shallowEqual)
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchMotocycles());
  // }, []);
  return (
    <div className='sub-container'>
      <div className='moto-contain'> 
      <ul>
        {bikes.map((data) =>(
          <Bikes key={data.id} photo={data.photo} model={data.model} color={data.color} description={data.description} id={data.id}/>
        )
        )}
      </ul>
    </div>
    </div>
  )
}

export default Motocycles