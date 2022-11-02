import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Bikes = (props) => {
  const { avatar, model, description, id } = props;

  return (
    <li className="bike-list">
      <Link to={`/details/${id}`}>
        <div className="image">
          <img src={avatar} alt="detail-pic" />
        </div>
        <div className="details">
          <h3>{model}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default Bikes;

Bikes.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
