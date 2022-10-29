import React from 'react'
import { Link } from 'react-router-dom'


const Splashscreen = () => {
  return (
    <div className='screen-cont'>
      <div className='btn-div'>
        <button><Link to='/auth/login'>Sign in</Link></button>
        <button type='button'><Link to='/auth/register'>
        Sing up
        </Link>
          </button>
      </div>
    </div>
  )
}

export default Splashscreen