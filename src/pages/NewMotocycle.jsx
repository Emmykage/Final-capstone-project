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
    const data = { model, duration, avatar, description, price };
    if (model && description && duration && price && avatar) {
      dispatch(addMotorcycle(data));
      setModel('');
      setDescription('');
      setDuration('');
      setPrice('');
      setAvatar('');

      setMsg({
        color: 'green',
        report: 'Motocycle has been added successfully'
      });
    } else {
      setMsg({ color: 'error', report: '* please fill all blanks correctly' });
    }
  };
  return (
    <div className="sub-container">
      <h2> Add New Motocycle</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Motocycle model
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Motocycle duration (months)
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Motocycle description
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Motocycle price: $
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              avatar
              <input
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
