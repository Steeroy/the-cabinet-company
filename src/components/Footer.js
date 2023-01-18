import { Icon } from '@iconify/react';
import React from 'react';

import '../App.css';
import logoSec from '../assets/logo_secondary.png';
import ksi from '../assets/ksi.png';

function Footer() {
  return (
    <div className="footer">
      <div className="top" id="contact">
        <h3>
          NEED NEW CABINETS?
          <br />
          <span>Let’s chat.</span>
        </h3>
        <p>
          Contact us today to find out more about what we can do for you. <br />{' '}
          We’ll be more than happy to answer any of your questions.
        </p>
        <button className="button__primary">get in touch</button>
      </div>
      <div className="line__sep"></div>
      <div className="bottom">
        <div className="logo__icons">
          <div className="logo__secondary">
            <img src={logoSec} alt="Logo" />
          </div>
          <div className="socials">
            <div className="icon">
              <Icon icon="ic:sharp-facebook" />
            </div>
            <div className="icon">
              <Icon icon="mdi:youtube" />
            </div>
            <div className="icon">
              <Icon icon="mdi:instagram" />
            </div>
            <div className="icon">
              <Icon icon="typcn:social-pinterest" />
            </div>
            <div className="icon">
              <Icon icon="mdi:twitter" />
            </div>
          </div>
        </div>
        <div className="contact__links">
          <div className="quick__links">
            <h6>Quick links</h6>
            <div className="links">
              <h6>WHAT WE DO</h6>
              <h6>WHY CABINETTS</h6>
              <h6>ABOUT US</h6>
            </div>
          </div>

          <div className="contacts">
            <h6>contact</h6>
            <p>086 022 2463</p>
            <p>clouw@thecabinetco.co.za</p>
          </div>

          <div className="postal__address">
            <h6>Postal Address:</h6>
            <p>
              Posbus 880 <br />
              Jeffreys Bay, 6330
            </p>
          </div>
        </div>

        <div className="ksi">
          <img src={ksi} alt="KSI" />
        </div>
      </div>
      <div className="designed">
        <p>
          ©TheCabinetComapny | Designed by <span>Impact Studio</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
