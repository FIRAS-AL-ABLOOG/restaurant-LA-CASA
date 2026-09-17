import React from "react";
import { Link } from "react-router-dom";
import {
  LuInstagram,
  LuFacebook,
  LuPhone,
} from "react-icons/lu";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>LA CASA</h2>

          <p>
            مطعم يقدم المأكولات الغربية،
            البيتزا والمشروبات المميزة.
          </p>

        </div>

        <div className="footer-links">

          <h3>روابط</h3>

          <Link to="/">الرئيسية</Link>
          <Link to="/menu">المنيو</Link>
          <Link to="/reservation">حجز طاولة</Link>
          <Link to="/location">الموقع</Link>

        </div>

        <div className="footer-contact">

          <h3>تواصل معنا</h3>

          <p>
            <LuPhone />
            +963 951427056
          </p>

          <div className="socials">

            <a href="#">
              <LuInstagram />
            </a>

            <a href="#">
              <LuFacebook />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 LA CASA Restaurant
      </div>

    </footer>
  );
}

export default Footer;