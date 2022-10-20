import React from 'react'
import './headerbody.css'
import img1 from './../../assets/img/12gzpwtz8ni9.jpg'
import img2 from './../../assets/img/image2.jpg'
import img3 from './../../assets/img/image3.jpg'
import img4 from './../../assets/img/image4.jpg'

export const HeaderBody = () => {
  return (
    <div className='head-content'>
        <div className='headline'>
            <h1>Available Bikes</h1>
            <p>You need a ride across town? </p>
        </div>
        <div className='header-body'>
            <div className='items'>
                <div className='item'>
                    <img src={img1} />
                </div>
                <div className='item'>
                    <img src={img2} />
                </div>
                <div className='item'>
                    <img src={img3} />
                </div>
                <div className='item'>
                    <img src={img4} />
                </div>

            </div>
        </div>
        </div>
  )
}
export default HeaderBody