import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './details.module.css';
import { BsChevronRight } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr'
import { BiCog } from 'react-icons/bi';
import { CgChevronRightO } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import Form from '../components/Reservations/Form';

const Details = ( props ) => {

  const motocycle = useSelector((state) => state.motocycles.find((motocycle)=> motocycle.id === motocycle_id))
  const user = useSelector((state) => state.user)
  // const navigate = useNavigate();
 const [city, setCity] = useState('')
 const [date, setDate] = useState('')
//  const [model, setModel] = useState('')
 


const [reserveSide, setReserveSide] = useState(false)
const showForm = ()=>{
  setReserveSide(!reserveSide)
}
const handleSubmit = (e) =>{
  e.preventDefault();
  // const user_id = user.id
  // const motorcycle_id = model.id
  showForm()
  const data = {name, date, city}
  dispatch(postReservation())
  // await sendReservation
  // console.log(data)
  // navigate( '/reservations')
  showForm()
}
const { name, image, financeFee, purchaseFee, payable, duration, id } = props;
return (
    <div className='details-wrapper'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='description'>
        <h2>{name}</h2>
        <p>- £350 upon every vespa purchase.</p>

        <ul className='price-list'>
          <li>
            <h6>Finance Fee</h6>
            <p>£{financeFee}</p>
          </li>

          <li>
            <h6>Option to purchase fee</h6>
            <p>£{purchaseFee}</p>
          </li>

          <li>
            <h6>total Amount Payable</h6>
            <p>£{payable}</p>
          </li>
        
          <li>
            <h6>Duration</h6>
            <p>{duration} Months</p>
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

        <button className='btn reserveBtn' onClick={showForm}><BiCog/> Reserve <CgChevronRightO/></button>
      </div>



      <div className={reserveSide ? 'sideform showForm' : 'sideForm'}>
        <span onClick={showForm}  className='close-btn' ><GrClose/></span>
        <Form name={name}/>
      {/* <form onSubmit={handleSubmit}>
      <div>
     
        <label>Select Motocycle</label>
       
         <input type='text' value={name} readOnly/>
        </div>
        <div>
     
        <label>City</label>
        <input type='text' value={city}
        onChange={(e)=> {setCity(e.target.value)} }/>
         
        </div>
        <div>
     
     <label>Date</label>
     <input type='date' value={date}
     onChange={(e)=> {setDate(e.target.value)} }/>
      
     </div>

        <div>
          
     
        <label>User name</label>
        <input type='text' value={user.name}/>
         </div>
         <input type='submit' value='make reservation' />
    </form>  */}

      </div>
    </div>
)
}

Details.propTypes = {
  name : PropTypes.object.isRequired,
};
export default Details