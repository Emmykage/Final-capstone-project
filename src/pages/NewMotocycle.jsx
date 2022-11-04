import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMotorcycle } from '../redux/motocycles/motocycles';

const NewMotocycle = () => {
  const dispatch = useDispatch();
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [avatar, setAvatar] = useState('');
  const [msg, setMsg] = useState({ color: '', report: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      model, duration, avatar, description, price,
    };
    if (model && description && duration && price && avatar) {
      dispatch(addMotorcycle(data));
      setModel('');
      setDescription('');
      setDuration('');
      setPrice('');
      setAvatar('');

      setMsg({
        color: 'green',
        report: 'Motocycle has been added successfully',
      });
    } else {
      setMsg({
        color: 'error',
        report: '* please fill all blanks correctly',
      });
    }
  };
  return (
    <div className="sub-container">
      <h2> Add New Motocycle</h2>
      <div>

        <form onSubmit={handleSubmit}>
          <div>

            <label htmlFor="model">
              Motocycle model
              <input
                id="model"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </label>
          </div>
          <div>

            <label htmlFor="duration">
              Motocycle duration (months)
              <input
                id="duration"
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </label>

          </div>
          <div>

            <label htmlFor="description">
              Motocycle description
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div>

            <label htmlFor="price">
              Motocycle price: $
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

          </div>
          <div>

            <label htmlFor="avatar">
              avatar
              <input
                id="avatar"
                type="url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </label>
          </div>
          <input type="submit" value="make reservation" />

          <span className={msg.color}>{msg.report}</span>

        </form>
      </div>
    </div>
  );
};

export default NewMotocycle;
