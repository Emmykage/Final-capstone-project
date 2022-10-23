import React from 'react'
import './details.module.css'

const Details = ({motocycle}) => {
  return (
    <div className='details-wrapper'>
      <img src={motocycle.image} alt={motocycle.name} />
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
          <button className='btn'>DISCOVER MORE MODELS </button>
        </div>
      </div>
    </div>
  )
}

export default Details