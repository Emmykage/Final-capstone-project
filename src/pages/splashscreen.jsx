import React from 'react'
import { Link } from 'react-router-dom'


const Splashscreen = () => {
  return (
    <div className='screen-cont'>
      <div className='btn-div'>
       <Link to='/auth/login' className='splash'>Sign in</Link>
       <Link to='/auth/register' className='splash'> Sign up</Link>      
      </div>
    </div>
  )
}

export default Splashscreen