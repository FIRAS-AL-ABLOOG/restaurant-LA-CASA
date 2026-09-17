import React from "react";
import { Link } from "react-router-dom";
import {
  LuArrowRight,
  LuClock3,
  LuMapPin,
  LuCalendarDays,
} from "react-icons/lu";

import "./Home.css";

function Home() {
  return (
    <div className="home">

      

      <section className="hero">

        <div className="hero-content">

          <span className="hero-small">
            WELCOME TO LA CASA
          </span>

          <h1>
            Taste the
            <span> unforgettable.</span>
          </h1>

          <p>
            تجربة طعام مختلفة تجمع بين المأكولات الغربية،
            البيتزا الطازجة والمشروبات المميزة في مكان واحد.
          </p>

          <div className="hero-buttons">

            <Link to="/menu" className="primary-button">
              اكتشف المنيو
              <LuArrowRight />
            </Link>

            <Link
              to="/reservation"
              className="secondary-button"
            >
              احجز طاولتك
            </Link>

          </div>

        </div>

      </section>

    

      <section className="home-info">

        <div>
          <LuClock3 />
          <div>
            <small>أوقات العمل</small>
            <strong>12:00 PM — 12:00 AM</strong>
          </div>
        </div>

        <div>
          <LuMapPin />
          <div>
            <small>العنوان</small>
            <strong>شارع المطاعم، دمشق</strong>
          </div>
        </div>

        <div>
          <LuCalendarDays />
          <div>
            <small>الحجوزات</small>
            <strong>يومياً</strong>
          </div>
        </div>

      </section>

    

      <section className="home-intro">

        <span>OUR KITCHEN</span>

        <h2>
          الطعام الجيد يبدأ
          <br />
          من المكونات الجيدة
        </h2>

        <p>
          نقدم مجموعة مختارة من الأطباق الغربية والبيتزا
          والمقبلات والمشروبات والكوكتيلات، مع اهتمام
          بالتفاصيل من أول مكون حتى آخر لقمة.
        </p>

        <Link to="/about">
          اكتشف قصتنا
          <LuArrowRight />
        </Link>

      </section>

    </div>
  );
}

export default Home;