import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  const user = localStorage.getItem('user');
  const { model, motorcycle_id, handleSubmit } = props;
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  return (
    <form onSubmit={(e) => handleSubmit(e, { motorcycle_id, date, city })}>
      <div>
        <label>
          Select Motocycle
          <input type="text" value={model} readOnly />
        </label>
      </div>

      <div>
        <label>
          City
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          User name
          <input type="text" value={user} />
        </label>
      </div>
      <input type="submit" value="make reservation" />
    </form>
  );
};

export default Form;

Form.propTypes = {
  model: PropTypes.string.isRequired,
  hundleSubmit: PropTypes.func.isRequired,
  motocylce_id: PropTypes.number.isRequired
};
