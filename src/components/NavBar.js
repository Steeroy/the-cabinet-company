import React, { useEffect, useRef } from 'react';
import '../App.css';

import LogoUrl from '../assets/logo.png';
import MenuIcon from '../assets/menu.png';

const menu__items = [
  {
    display: 'WHAT WE DO',
    link: '#work',
  },
  {
    display: 'SERVICES',
    link: '#services',
  },
  {
    display: 'ABOUT US',
    link: '#aboutus',
  },
];

function NavBar() {
  useEffect(() => {
    const menus = document.querySelectorAll('.menu a');

    function setMenuActive() {
      menus.forEach((n) => n.classList.remove('active__menu'));
      this.classList.add('active__menu');
    }

    menus.forEach((n) => n.addEventListener('click', setMenuActive));
  }, []);

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <div className="navbar">
      {/* Logo Box */}
      <div className="logo">
        <img src={LogoUrl} alt="Logo" />
      </div>

      <div className="right">
        {/* Navigation Menu */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu">
            {menu__items.map((item, index) => (
              <a href={item.link} key={index}>
                {item.display}
              </a>
            ))}
          </div>
        </div>

        <a href="#contact">
          <button className="button__primary">GET IN TOUCH</button>
        </a>

        <div className="mobile__menu" onClick={toggleMenu}>
          <img src={MenuIcon} alt="menu" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
