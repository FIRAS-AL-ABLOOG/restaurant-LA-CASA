import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LuShoppingBag,
  LuMenu,
  LuX,
} from "react-icons/lu";

import { useState } from "react";

import "./Navbar.css";

function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        
        <Link to="/" className="restaurant-logo" onClick={closeMenu}>
          <span>LA</span>
          <div>
            <strong>LA CASA</strong>
            <small>RESTAURANT</small>
          </div>
        </Link>

        
        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
        >
          {open ? <LuX /> : <LuMenu />}
        </button>

       
        <nav className={`navbar-links ${open ? "active" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            الرئيسية
          </NavLink>

          <NavLink to="/menu" onClick={closeMenu}>
            المنيو
          </NavLink>

          <NavLink to="/reservation" onClick={closeMenu}>
            حجز طاولة
          </NavLink>

          <NavLink to="/location" onClick={closeMenu}>
            الموقع
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            عن المطعم
          </NavLink>

        </nav>

        
        <Link to="/order" className="cart-button">
          <LuShoppingBag />

          {cartCount > 0 && (
            <span>{cartCount}</span>
          )}
        </Link>

      </div>

    </header>
  );
}

export default Navbar;