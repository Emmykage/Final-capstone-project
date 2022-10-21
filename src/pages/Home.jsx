import React from 'react'
import Footer from '../components/footer/Footer'
import HeaderBody from '../components/headerBody/HeaderBody'
import Navaigation from '../components/nav/Navigation'

export const Home = () => {
  return (
    <>

    <div className='header'>
        <Navaigation />
        
        <div>
        <HeaderBody />
        <Footer/>
        </div>
    </div>
   

    </>
  )
}
