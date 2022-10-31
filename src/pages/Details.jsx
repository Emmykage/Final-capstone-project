import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './details.module.css';
import { BsChevronRight } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr'
import { BiCog } from 'react-icons/bi';
import { CgChevronRightO } from 'react-icons/cg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Form from '../components/Reservations/Form';
import {  fetchedMotocycles, getmotocycle } from '../redux/motocycles/motocycles';
import { useParams } from 'react-router-dom';
const Details = ( ) => {
  const { id } = useParams()
  const user = localStorage.getItem('user')
  // const user = useSelector((state) => state.user)
  const motocycle = useSelector((state) => state.motocycles.find((motocycle)=> motocycle.id == id))
  // const motocycles = useSelector((state) => state.motocycles)
  // console.log(motocycles)
  // const motocycle = motocycles.find((moto) => moto.id == id )

  console.log(motocycle)
  // console.log(motocycle)
  console.log(id)
  const dispatch = useDispatch()
  useEffect(()=>{
  // dispatch(getmotocycle(id));
  dispatch(fetchedMotocycles())
}, []);

const [reserveSide, setReserveSide] = useState(false)
const toggleForm = ()=>{
  setReserveSide(!reserveSide)
}
const handleSubmit = (e, formValues) =>{
  e.preventDefault();
  // toggleForm()
  // const data = {name, date, city}
  dispatch(postReservation(formValues))
  // await sendReservation
  // console.log(data)
  // navigate( '/reservations')
  toggleForm()
}

return (
    <div className='details-wrapper'>
      {/* <div className='img-container'>
        <img src={motocycle.model} alt={motocycle.model} />
      </div>
      <div className='description'>
        <h2>{motocycle.model}</h2>
        <p>- £350 upon every vespa purchase.</p>

        <ul className='price-list'>
          <li>
            <h6>Finance Fee</h6>
            <p>£{motocycle.price}</p>
          </li>

          <li>
            <h6>Option to purchase fee</h6>
            <p>£{motocycle.purchaseFee}</p>
          </li>

          <li>
            <h6>total Amount Payable</h6>
            <p>£{motocycle.price}</p>
          </li>
        
          <li>
            <h6>Duration</h6>
            <p>{motocycle.duration} Months</p>
          </li>
        </ul>
        <p className='rep'>5.9% APR Representative</p>

        <div className='buttons'>
          <button className='btn discover'>DISCOVER MORE MODELS  <BsChevronRight/></button>
        </div>

        <div className='color-picker'>
          <svg viewBox="0 0 10 10" width="30%">
            <circle cx="5" cy="5" r="3" stroke-width="1.5" stroke="#00247D" fill="#fff"/>
          </svg>
        </div>

        <button className='btn reserveBtn' onClick={toggleForm}><BiCog/> Reserve <CgChevronRightO/></button>
      </div>



      <div className={reserveSide ? 'sideform showForm' : 'sideForm'}>
        <span onClick={toggleForm}  className='close-btn' ><GrClose/></span>
        <Form 
        model={motocycle.model} 
        user={user} 
        handleSubmit={handleSubmit}
        />
     
      </div> */}
    </div>
)
}

Details.propTypes = {
  name : PropTypes.object.isRequired,
};
export default Details