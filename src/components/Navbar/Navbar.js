import React, { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import mobilelogo from './../../assets/images/mobilelogo.png'
import userIcon from './../../assets/images/user.png'



function Navbar() {
  const [hamburgerActiv, setHamburgerActiv] = useState(false);

  const hamburgerOpen = () => {
    setHamburgerActiv(!hamburgerActiv);
  };
 

  return (
    <>
      <section className='menu'>
        <div className='menu-container wrapper'>
          <div className='hamburger-mb-menu' onClick={hamburgerOpen}>
            <span
              className={!hamburgerActiv ? 'hamburger1' : 'hamburger11'}
            ></span>
            <span
              className={!hamburgerActiv ? 'hamburger2' : 'hamburger22'}
            ></span>
            <span
              className={!hamburgerActiv ? 'hamburger3' : 'hamburger33'}
            ></span>
          </div>
            <div className='menu__navigation__item mobileuserIcon'>
              <span className="icon-user-solid-circle userTools__img" />
              <p className='menu__navigation__item_text'>Login</p>
            </div>
          <div className='menu__navigation'>
            <ul>
              <li>
                <Link to='/' className='menu__navigation__item_text'>
                  Products
                </Link>
              </li>
              <li>
                <Link to='/' className='menu__navigation__item_text'>
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          <Link to='/' className='logo'>
            <picture>
              <source srcSet={logo} alt='logo' className='menu__logo' media="(min-width: 800px)"/>
              <img src={mobilelogo} alt='logo' className='menu__logo'/>
            </picture>
          </Link>
          <div className='userTools'>
              <div className='menu__navigation__item'>
                <span className="icon-cart userTools__img" />
                <p className='menu__navigation__item_text'>Cart</p>
              </div>
              <div className='menu__navigation__item userIcon'>
                <span className="icon-user-solid-circle userTools__img" />
                <p className='menu__navigation__item_text'>Login</p>
              </div>
              <span className="icon-search" />
          </div>

          <div className={hamburgerActiv ? 'menu-blok-active' : 'menu-blok'} onClick={hamburgerOpen}>
            <div className='menu-blok__container' onClick={(e) => { e.stopPropagation(); }}>
              <ul className='menu-blok__navigation'>
                <li onClick={hamburgerOpen}>
                  <Link to='/'>
                    Products
                  </Link>
                </li>
                <li onClick={hamburgerOpen}>
                  <Link to='/'>
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default Navbar
