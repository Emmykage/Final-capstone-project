

import React, {useEffect} from 'react'
import Footer from '../components/footer/Footer'
import HeaderBody from '../components/headerBody/HeaderBody'
import { useNavigate} from 'react-router-dom'
// import Navaigation from '../components/nav/Navigation'

export const Home = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigation('/splash_page')
    }
  }, [])

  return (
    <div className='sub-container'>
        <HeaderBody />
        <Footer/>
       
    </div>
  )
}
