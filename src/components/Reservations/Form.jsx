import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RForm = (props) => {
  const user = localStorage.getItem('user');
  const { model, motorcycle_id, handleSubmit } = props;
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  console.log(model);

  return (

    <form onSubmit={(e) => handleSubmit(e, { motorcycle_id, date, city })}>
      <div>

        <label htmlFor="model">Select Motocycle</label>

        <input type="text" id="model" value={model} readOnly />
      </div>
      <div>

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => { setCity(e.target.value); }}
        />

      </div>
      <div>

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => { setDate(e.target.value); }}
        />

      </div>

      <div>

        <label htmlFor="name">User name</label>
        <input id="name" type="text" value={user} />
      </div>
      <input type="submit" value="make reservation" />
    </form>

  );
};

export default RForm;

RForm.propTypes = {
  model: PropTypes.string.isRequired,
  hundleSubmit: PropTypes.func.isRequired,
  motorcylce_id: PropTypes.number.isRequired,
};
