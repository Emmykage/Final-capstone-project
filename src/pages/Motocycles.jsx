
import React from 'react'
// import { useDispatch, useSelector, shallowEqual } from 'react-redux'

const Motocycles = () => {
  // const motocycles = useSelector((state) => state.motocycles, shallowEqual)
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchMotocycles());
  // }, []);
  return (
    <div className='sub-container'>
      <div className='moto-contain'> 
      <table>
      <thead>
        <tr><th>Bike model</th>
        <th>color</th>
        <th>description</th></tr>
      </thead>
        
      <tbody>

        
    <tr>
    <td>toyota</td>
    <td>black</td>
    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!</td>
    </tr>
    <tr>
    <td>toyota</td>
    <td>black</td>
    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!</td>
    </tr>
   
    <tr>
    <td>toyota</td>
    <td>black</td>
    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!</td>
    </tr>
   
    <tr>
    <td>toyota</td>
    <td>black</td>
    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!</td>
    </tr>
   
    <tr>
    <td>toyota</td>
    <td>black</td>
    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi at impedit expedita, sed architecto eveniet recusandae maxime amet cum! Cupiditate!</td>
    </tr>
   
   

        {/* {motocycles.map((data, index) =>(
          <Reservation model={data.model} city={data.city} date={data.date} key={index}/>
        ))} */}
       </tbody>
       </table>
    </div>
    </div>
  )
}

export default Motocycles