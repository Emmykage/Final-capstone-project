import React from 'react';
import { Link } from 'react-router-dom';

const Bikes = (props) => {
  const {
    photo, model, description, id,
  } = props;
  return (
    <li className="bike-list">
      <Link to={`/details/${id}`}>

        <div className="image">
          <img src={photo} />
        </div>
        <div className="details">
          <h3>{model}</h3>

          <p>
            {' '}
            {description}
          </p>
        </div>
        <div />
      </Link>
    </li>
  );
};

export default Bikes;
