import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteMotocycle } from '../redux/motocycles/motocycles';

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
        <button onClick={handleDelete}><AiFillDelete /></button>
      </div>

    </li>
  );
};

export default Motocycles;
