import React, { useRef } from 'react';

import '../App.css';

import heroImg from '../assets/hero_image.png';
import mobileHeroImg from '../assets/mobile__hero.png';

function Hero() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log('width is: ' + windowSize.current[0]);
  return (
    <div className="hero">
      <div className="hero__texts">
        <h1>Trusted leader in</h1>
        <h1>Cabinet design.</h1>
      </div>

      <div className="hero__img">
        {windowSize.current[0] <= 600 ? (
          <img src={mobileHeroImg} alt="Hero banner" />
        ) : (
          <img src={heroImg} alt="Hero banner" />
        )}
      </div>
    </div>
  );
}

export default Hero;
