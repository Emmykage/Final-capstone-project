import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Bikes = (props) => {
  const {
    photo, model, description, id,
  } = props;
  return (
    <li className="bike-list">
      <Link to={`/details/${id}`}>

        <div className="image">
          <img src={photo} alt="motocycle" />
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
Bikes.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Bikes;

Bikes.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
