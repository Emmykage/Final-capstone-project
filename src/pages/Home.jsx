import React from 'react'
import Footer from '../components/footer/Footer'
import HeaderBody from '../components/headerBody/HeaderBody'
import Navaigation from '../components/nav/Navigation'

export const Home = () => {
  return (
    <>
     <Navaigation />

    <div className='sub-container'>
        <HeaderBody />
        <Footer/>
       
    </div>
   

    </>
  )
}
