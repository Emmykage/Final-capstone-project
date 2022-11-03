import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMotocycle } from '../redux/motocycles/motocycles';
import PropTypes from 'prop-types';

const Motocycles = (props) => {
  const dispatch = useDispatch();
  const { model, avatar, id } = props;
  const handleDelete = () => {
    dispatch(deleteMotocycle(id));
  };
  return (
    <li>
      <div className="image">
        <img src={avatar} alt="bike" />
      </div>
      <div className="details">
        <h3>{model}</h3>
        <button type="button" onClick={handleDelete}><AiFillDelete /></button>
      </div>

    </li>
  );
};

export default Motocycles;

Motocycles.propTypes = {
  model: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
