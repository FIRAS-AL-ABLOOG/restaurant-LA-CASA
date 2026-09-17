import React from "react";
import {
  LuMapPin,
  LuClock3,
  LuPhone,
} from "react-icons/lu";

import "./Location.css";

function Location() {
  return (
    <div className="location-page">

      <section className="location-header">

        <span>FIND US</span>

        <h1>
          زورونا
        </h1>

        <p>
          نحن بانتظاركم لتجربة طعام مختلفة.
        </p>

      </section>

      <div className="location-grid">

        <div className="location-card">

          <LuMapPin />

          <h3>العنوان</h3>

          <p>
            شارع المطاعم، دمشق
            <br />
            سوريا
          </p>

        </div>

        <div className="location-card">

          <LuClock3 />

          <h3>أوقات العمل</h3>

          <p>
            يومياً
            <br />
            12:00 PM — 12:00 AM
          </p>

        </div>

        <div className="location-card">

          <LuPhone />

          <h3>التواصل</h3>

          <p>
            +963 900 000 000
            <br />
            WhatsApp متاح
          </p>

        </div>

      </div>

      <div className="map-placeholder">

        <LuMapPin />

        <h2>LA CASA</h2>

        <p>
          موقع المطعم يظهر هنا
        </p>

        <button
          onClick={() =>
            window.open(
              "https://maps.google.com",
              "_blank"
            )
          }
        >
          فتح Google Maps
        </button>

      </div>

    </div>
  );
}

export default Location;