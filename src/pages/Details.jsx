import React, { useState, useEffect } from 'react';
import './details.module.css';
import { BsChevronRight } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { BiCog } from 'react-icons/bi';
import { CgChevronRightO } from 'react-icons/cg';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import RForm from '../components/Reservations/Form';
import { fetchedMotocycles } from '../redux/motocycles/motocycles';
import { postReservation } from '../redux/reservations/reservations';

const Details = () => {
  const { id } = useParams();
  const user = localStorage.getItem('user');
  const motorcycles = useSelector((state) => state.motocycles);
  const motorcycle = motorcycles.filter((moto) => moto.id == id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchedMotocycles());
  }, []);

  const [reserveSide, setReserveSide] = useState(false);
  const toggleForm = () => {
    setReserveSide(!reserveSide);
  };
  const handleSubmit = (e, formValues) => {
    e.preventDefault();
    dispatch(postReservation(formValues));
    toggleForm();
  };

  return (
    <>
      {motorcycle.map((motocycle) => (
        <div key={motocycle.id} className="details-wrapper">
          <div className="img-container">
            <img src={motocycle.avatar} alt={motocycle.model} />
          </div>
          <div className="description">
            <h2>{motocycle.model}</h2>
            <p>- £350 upon every vespa purchase.</p>

            <ul className="price-list">
              <li>
                <h6>Finance Fee</h6>
                <p>
                  £
                  {motocycle.price}
                </p>
              </li>

              <li>
                <h6>Option to purchase fee</h6>
                <p>
                  £
                  {motocycle.price}
                </p>
              </li>

              <li>
                <h6>total Amount Payable</h6>
                <p>
                  £
                  {motocycle.price}
                </p>
              </li>

              <li>
                <h6>Duration</h6>
                <p>
                  {motocycle.duration}
                  {' '}
                  Months
                </p>
              </li>
            </ul>
            <p className="rep">5.9% APR Representative</p>

            <div className="buttons">
              <button type="button" className="btn discover">
                DISCOVER MORE MODELS
                <BsChevronRight />
              </button>
            </div>

            <div className="color-picker">
              <svg viewBox="0 0 10 10" width="30%">
                <circle cx="5" cy="5" r="3" strokeWidth="1.5" stroke="#00247D" fill="#fff" />
              </svg>
            </div>

            <button type="button" className="btn reserveBtn" onClick={toggleForm}>
              <BiCog />
              {' '}
              Reserve
              {' '}
              <CgChevronRightO />
            </button>
          </div>

          <div className={reserveSide ? 'sideform showForm' : 'sideForm'}>
            <button type="button" onClick={toggleForm} className="close-btn"><GrClose /></button>
            <RForm
              model={motocycle.model}
              motorcycle_id={id}
              user={user}
              handleSubmit={handleSubmit}
            />

          </div>
        </div>
      ))}

    </>
  );
};

export default Details;

