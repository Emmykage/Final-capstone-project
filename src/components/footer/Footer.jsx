import React from 'react';
import './footer.css';
import { FaMotorcycle } from 'react-icons/fa';
import { TfiWallet } from 'react-icons/tfi';
import { GiCheckedShield } from 'react-icons/gi';

const Footer = () => (
  <div className="footer">
    <hr />
    <div className="footer-row">
      <div className="foot-col">
        <span>
          <FaMotorcycle className="icon" />
          <h4> Modern fleet</h4>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          rerum!
        </p>
      </div>
      <div className="foot-col">
        <span>
          <TfiWallet className="icon" />
          <h4>Special price</h4>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          rerum!
        </p>
      </div>
      <div className="foot-col">
        <span>
          {' '}
          <GiCheckedShield className="icon" />
          <h4>Full Insurance plan</h4>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          rerum!
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
