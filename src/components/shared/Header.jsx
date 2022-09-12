import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

  const navbar = useRef()

  const handleHamClick = () => {
    navbar.current.classList.toggle('header__nav--close')
  }
  return (
    <header className="header">
      <NavLink className="header__logo_link"  to="/">
        <div className="header__logo"><h1>E-commerce</h1></div>
      </NavLink>
      <i onClick={handleHamClick} className="fa-solid fa-bars header__menu-ham"></i>
      <nav ref={navbar} className="header__nav header__nav--close">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/login"><i className="fa-solid fa-user"></i></NavLink>
          </li>
          <li className="header__item">
            <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/purchases"><i className="fa-solid fa-shop"></i></NavLink>
          </li>
          <li className="header__item">
          <NavLink className={({isActive}) => isActive ? 'header__navlink active-link' : 'header__navlink'} to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
