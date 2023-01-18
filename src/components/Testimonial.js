import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

import '../App.css';

const data = [
  {
    message:
      'Testing 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.',
    name: 'Name and Surname',
  },
  {
    message:
      'Testing 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.',
    name: 'Name and Surname',
  },
  {
    message:
      'Testing 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.',
    name: 'Name and Surname',
  },
  {
    message:
      'Testing 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.',
    name: 'Name and Surname',
  },
];

function Testimonial() {
  return (
    <div className="testimonial">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial__content">
              <span></span>
              <div className="testimony">
                <p>{item.message}</p>
                <h6>
                  {' - '}
                  {item.name}
                </h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
