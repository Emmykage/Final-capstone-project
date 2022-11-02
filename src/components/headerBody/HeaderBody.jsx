import React, { useEffect } from 'react'
import './headerbody.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedMotocycles } from '../../redux/motocycles/motocycles'


export const HeaderBody = () => {
    const motocycles = useSelector((state) => state.motocycles)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchedMotocycles())
    }, [])
  return (
    <div className='head-content'>
        <div className='headline'>
            <h1>Available Bikes</h1>
            <p>You need a ride across town? </p>
        </div>
        {motocycles.length < 1 ? 
                    <h3> There are no motocycles to select</h3> 
                : <h3>Rent a Motocycle now!!! </h3>}
        <div className='header-body'>
            <div className='items'>
                <div className='limit'>
                <Swiper
                    slidesPerView={3}
                    pagination={{
                    type: "progressbar",
                    }}
                    navigation={true}
                     modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    
                 {motocycles.map(data =>(
                    <SwiperSlide>
                        <Link to={`details/${data.id}`}>
                        <div key={data.id}>
                            <div className='item-img'>
                            <div className='bg-color'></div>
                                <img src={data.avatar} />
                            </div>
                            <div className='item-details'>
                                <h3>{data.model}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                      )) }

                </Swiper>
                      
                </div>

                {/* =========================mobile view ======================== */}
                <div className='limit-mobile'>
                <Swiper
                    // slidesPerView={3}
                    pagination={{
                    type: "progressbar",
                    }}
                    navigation={true}
                     modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                 {motocycles.map(data =>(
                    <SwiperSlide>
                        <Link to={`details/${data.id}`}>
                        <div key={data.id}>
                            <div className='item-img'>
                                <div className='bg-color'></div>
                                <img src={data.avatar} />
                            </div>
                            <div className='item-details'>
                                <h3>{data.model}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                      )) }

                </Swiper>
                      
                </div>
            </div>
        </div>
    </div>
  )
}
export default HeaderBody




// import React from 'react'
// import './headerbody.css'
// import img1 from './../../assets/img/12gzpwtz8ni9.jpg'
// import img2 from './../../assets/img/image2.jpg'
// import img3 from './../../assets/img/image3.jpg'
// import img4 from './../../assets/img/image4.jpg'

// // import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import "./styles.css";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// const data_image = [{
//     id: 1,
//     image: img1,
//     header: 'Hyundei Powrer Bike',
//     paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, provident?'

// },
// {   id: 2,
//     image: img2,
//     header: 'Hyundei Powrer Bike',
//     paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, provident?'
    
// },
// {   id: 3,
//     image: img3,
//     header: 'Hyundei Powrer Bike',
//     paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, provident?'
    
// }, 
// {   id: 4,
//     image: img4,
//     header: 'Hyundei Powrer Bike',
//     paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, provident?'
    
// }]

// export const HeaderBody = () => {
//   return (
//     <div className='head-content'>
//         <div className='headline'>
//             <h1>Available Bikes</h1>
//             <p>You need a ride across town? </p>
//         </div>
//         <div className='header-body'>
//             <div className='items'>
//                 <Swiper
//                     pagination={{
//                     type: "progressbar",
//                     }}
//                     navigation={true}
//                      modules={[Pagination, Navigation]}
//                     className="mySwiper"
//                 >

//                  {data_image.map(data =>(
//                     <SwiperSlide>
//                         <div key={data.id}>
//                             <div className='item-img'>
//                                 <img src={data.image} />
//                             </div>
//                             <div className='item-details'>
//                                 <h3>{data.header}</h3>
//                                 <p>{data.paragraph}</p>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                       )) }

//                 </Swiper>
                      

//             </div>
//         </div>
//     </div>
//   )
// }
// export default HeaderBody