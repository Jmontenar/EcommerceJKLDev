import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <NavLink className="header__logo_link"  to="/">
        <div className="header__logo"><h1>E-commerce</h1></div>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item_user">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login"><i className="fa-solid fa-user"></i></NavLink>
          </li>
          <li className="header__item_purchases">
            <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/purchases"><i className="fa-solid fa-shop"></i></NavLink>
          </li>
          <li className="header__item_cart">
          <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
