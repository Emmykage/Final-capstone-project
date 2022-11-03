import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteReservation } from '../../redux/reservations/reservations';

const Reservation = (props) => {
  const dispatch = useDispatch();
  const {
    model, city, date, id, avatar,
  } = props;
  const handleDelete = () => {
    dispatch(deleteReservation(id));
  };
  return (
    <div className="card">
      <div className="card-img">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="card-details">
        <h4>
          { model }
          {' '}
        </h4>

        <h5>
          {' '}
          { date }
          {' '}
        </h5>
        <div className="action-btns">
          <span>{city}</span>
          <button type="button" onClick={handleDelete}> Delete </button>
        </div>

      </div>
    </div>

  );
};

export default Reservation;

Reservation.propTypes = {
  model: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
