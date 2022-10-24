import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

const Motocycles = () => {
  const motocycles = useSelector((state) => state.motocycles, shallowEqual)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchMotocycles());
  }, []);
  return (
    <div className='sub-container'>
      <div className='moto-container'> 
      <ul>
        <li>
          <div><h4>Toyota</h4></div><div><p>black</p></div><div><p>description</p></div>
        </li>
        <li>
          <div><h4>Toyota</h4></div><div><p>black</p></div><div><p>description</p></div>
        </li>
        <li>
          <div><h4>Toyota</h4></div><div><p>black</p></div><div><p>description</p></div>
        </li>
        <li>
          <div><h4>Toyota</h4></div><div><p>black</p></div><div><p>description</p></div>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Motocycles