import React from 'react';
import '../App.css';

import img1 from '../assets/work1.png';
import img2 from '../assets/work2.png';

const works = [
  {
    imgUrl: img1,
    title: 'Custom home installations',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.',
  },
  {
    imgUrl: img2,
    title: 'Custom home installations',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis lectus.',
  },
];

function Work() {
  return (
    <div className="work" id="work">
      <div className="work__projects">
        {works.map((item, index) => (
          <div className="work__card" key={index}>
            <div className="card__img">
              <img src={item.imgUrl} alt={item.title} />
            </div>
            <div className="card__content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button className="button__secondary">LEARN MORE</button>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom__dash"></div>

      <div className="texts">
        <h1>The Cabinet Company can build you the cabinet of your dreams.</h1>
        <h1>You dream it, we design it.</h1>
      </div>
    </div>
  );
}

export default Work;
