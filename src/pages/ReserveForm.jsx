import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchedMotocycles } from '../redux/motocycles/motocycles';
import { postReservation } from '../redux/reservations/reservations';

const ReserveForm = () => {
  const dispatch = useDispatch();
  const motocycles = useSelector((state) => state.motocycles);
  useEffect(() => {
    dispatch(fetchedMotocycles());
  }, []);

  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [model, setModel] = useState('');
  const [msg, setMsg] = useState({ color: '', report: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const motorcycle_id = model;

    const data = { motorcycle_id, date, city };

    if (city && date && model) {
      dispatch(postReservation(data));
      setCity('');
      setDate('');
      setModel('');
      setMsg({
        color: 'green',
        report: 'Successfully made a reservation',
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
      <h2> Make Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>

          <label htmlFor="model">
            Select Motocycle
            <select
              className="model-selector"
              value={model}
              onChange={(e) => { setModel(e.target.value); }}
            >
              <option>SELECT MOTOCYCLE </option>
              {motocycles.map((motocycle) => (
                <option key={motocycle.id} value={motocycle.id}>{motocycle.model}</option>

              ))}

            </select>
          </label>

        </div>
        <div>

          <label htmlFor="city">
            City
            <input
              type="text"
              value={city}
              onChange={(e) => { setCity(e.target.value); }}
            />
          </label>
        </div>
        <div>

          <label htmlFor="date">
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => { setDate(e.target.value); }}
            />
          </label>
        </div>

        <input type="submit" value="make reservation" />
        <span className={msg.color}>{msg.report}</span>
      </form>
    </div>

  );
};

export default ReserveForm;
