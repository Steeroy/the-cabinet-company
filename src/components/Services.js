import React from 'react';
import { Row } from 'react-bootstrap';

import '../App.css';
import kitchen1 from '../assets/kitchen.svg';
import kitchen2 from '../assets/kitchen__hover.svg';

import bathroom1 from '../assets/bathroom.svg';
import bathroom2 from '../assets/bedroom_hover.svg';

import bedroom1 from '../assets/bedroom.svg';
import bedroom2 from '../assets/bathroom_hover.svg';

import others1 from '../assets/other.svg';
import others2 from '../assets/other_hover.svg';

const data = [
  {
    title: 'Kitchens',
    frontImg: kitchen1,
    backImg: kitchen2,
  },
  {
    title: 'Bathrooms',
    frontImg: bathroom1,
    backImg: bathroom2,
  },
  {
    title: 'Bedrooms',
    frontImg: bedroom1,
    backImg: bedroom2,
  },
  {
    title: 'Others',
    frontImg: others1,
    backImg: others2,
  },
];

function Services() {
  return (
    <div className="services" id="services">
      <h2>OUR SERVICES</h2>
      <Row>
        {data.map((item, index) => (
          <div key={index} className="col">
            <div className="services__box">
              <h3>{item.title}</h3>
              <div className="service__img">
                <img src={item.backImg} alt="Kitchen" className="back" />
                <img src={item.frontImg} alt="Kitchen" className="front" />
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default Services;
