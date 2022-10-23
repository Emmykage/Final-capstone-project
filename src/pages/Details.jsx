import React from 'react';
import PropTypes from 'prop-types';
import './Details.module.css';
import { BsChevronRight } from 'react-icons/bs';
import { BiCog } from 'react-icons/bi';
import { CgChevronRightO } from 'react-icons/cg';

const Details = ({ motocycle }) => 
 (
    <div className='details-wrapper'>
      <div className='img-container'>
        <img src={motocycle.image} alt={motocycle.name} />
      </div>
      <div className='description'>
        <h2>{motocycle.name}</h2>
        <p>- £350 upon every vespa purchase.</p>

        <ul className='price-list'>
          <li>
            <h6>Finance Fee</h6>
            <p>£{motocycle.financeFee}</p>
          </li>

          <li>
            <h6>Option to purchase fee</h6>
            <p>£{motocycle.purchaseFee}</p>
          </li>

          <li>
            <h6>total Amount Payable</h6>
            <p>£{motocycle.payable}</p>
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

        <button className='btn reserveBtn'><BiCog/> Reserve <CgChevronRightO/></button>
      </div>
    </div>
  )

Details.propTypes = {
  motocycle : PropTypes.Object.isRequired,
};
export default Details