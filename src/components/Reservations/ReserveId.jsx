import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { Form } from 'react-router-dom'

const Reserve_id = () => {
  const { motocycle_id } = useParams();
  const dispatch = useDispatch();
  const motocycle = useSelector((state) => state.motocycles.find((motocycle) => motocycle.id === motocycle_id));
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user_name = user_name;
    const motorcycle_id = model.id;

    const data = {
      user_id, motorcycle_id, date, city,
    };
    dispatch(postReservation());
    // await sendReservation
    console.log(data);
    navigate('/reservations');
  };
  return (

    <div className="sub-container">
      <form onSubmit={handleSubmit}>
        <div>

          <label>Select Motocycle</label>

          <input type="text" value={motocycle.model} />
        </div>
        <div>

          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => { setCity(e.target.value); }}
          />

        </div>
        <div>

          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => { setDate(e.target.value); }}
          />

        </div>

        <div>

          <label>User name</label>
          <input type="text" value={user.name} />
        </div>
        <input type="submit" value="make reservation" />
      </form>
    </div>

  );
};

export default Reserve_id;
