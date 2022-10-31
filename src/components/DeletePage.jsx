import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const Motocycles = (props) => {
  const {model, avatar, handleDelete, id} = props
    return (
    <li>
              <div className='image'>
                <img src={avatar} alt='bike'/>
              </div>
              <div className='details'>
                <h3>{model}</h3>
                <button onClick={handleDelete(id)}><AiFillDelete/></button>
              </div>
           
          </li>
  )
}

export default Motocycles