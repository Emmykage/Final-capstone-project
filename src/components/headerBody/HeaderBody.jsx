import React, { useEffect } from 'react';
import './headerbody.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedMotocycles } from '../../redux/motocycles/motocycles';

export const HeaderBody = () => {
  const motocycles = useSelector((state) => state.motocycles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchedMotocycles());
  }, []);
  return (
    <div className="head-content">
      <div className="headline">
        <h1>Available Bikes</h1>
        <p>You need a ride across town? </p>
      </div>
      {motocycles.length < 1 ? (
        <h3> There are no motocycles to select</h3>
      ) : (
        <h3>Rent a Motocycle now!!! </h3>
      )}
      <div className="header-body">
        <div className="items">
          <div className="limit">
            <Swiper
              slidesPerView={3}
              pagination={{
                type: 'progressbar'
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {motocycles.map((data) => (
                <SwiperSlide>
                  <Link to={`details/${data.id}`}>
                    <div key={data.id}>
                      <div className="item-img">
                        <div className="bg-color"></div>
                        <img src={data.avatar} alt="avatar" />
                      </div>
                      <div className="item-details">
                        <h3>{data.model}</h3>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* =========================mobile view ======================== */}
          <div className="limit-mobile">
            <Swiper
              // slidesPerView={3}
              pagination={{
                type: 'progressbar'
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {motocycles.map((data) => (
                <SwiperSlide>
                  <Link to={`details/${data.id}`}>
                    <div key={data.id}>
                      <div className="item-img">
                        <div className="bg-color"></div>
                        <img src={data.avatar} />
                      </div>
                      <div className="item-details">
                        <h3>{data.model}</h3>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBody;
