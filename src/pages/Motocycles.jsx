import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Bikes from '../components/motocycles/motocycles';
import { fetchedMotocycles } from '../redux/motocycles/motocycles';

const Motocycles = () => {
  const motocycles = useSelector((state) => state.motocycles, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchedMotocycles());
  }, []);

  return motocycles.length > 0 ? (
    <div className="sub-container">
      <h2>Motocycles</h2>
      <div className="moto-contain">
        <ul>
          {motocycles.map((data) => (
            <Bikes
              key={data.id}
              photo={data.avatar}
              model={data.model}
              description={data.description}
              id={data.id}
            />
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="res-condition">
      <h2> Motocycles </h2>
      <h3> Add Motocycle </h3>
      <div className="center-t">
        <button
          className="reserve-btn"
          onClick={() => navigate('/new')}
          type="button"
        >
          Add Motocycle
        </button>
      </div>
    </div>
  );
};

export default Motocycles;
