import React, { useState } from "react";
import {
  LuCalendarDays,
  LuClock3,
  LuUsers,
} from "react-icons/lu";

import "./Reservation.css";

function Reservation() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "تم إرسال طلب الحجز، سنتواصل معك لتأكيد الموعد."
    );
  };

  return (
    <div className="reservation-page">

      <div className="reservation-content">

        <div className="reservation-text">

          <span>RESERVATION</span>

          <h1>
            احجز طاولتك
          </h1>

          <p>
            اجعل زيارتك القادمة أكثر راحة واحجز
            طاولتك مسبقاً.
          </p>

          <div className="reservation-features">

            <div>
              <LuCalendarDays />
              <span>حجز يومي</span>
            </div>

            <div>
              <LuClock3 />
              <span>12:00 PM — 12:00 AM</span>
            </div>

            <div>
              <LuUsers />
              <span>لغاية 12 شخص</span>
            </div>

          </div>

        </div>

        <form
          className="reservation-form"
          onSubmit={handleSubmit}
        >

          <input
            name="name"
            placeholder="الاسم الكامل"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="رقم الهاتف"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>التاريخ</label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <label>الوقت</label>

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />

          <label>عدد الأشخاص</label>

          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
          >
            <option value="1">شخص واحد</option>
            <option value="2">شخصان</option>
            <option value="3">3 أشخاص</option>
            <option value="4">4 أشخاص</option>
            <option value="5">5 أشخاص</option>
            <option value="6">6 أشخاص</option>
            <option value="7">7 أشخاص</option>
            <option value="8">8 أشخاص</option>
            <option value="9">9 أشخاص</option>
            <option value="10">10 أشخاص</option>
          </select>

          <button type="submit">
            إرسال طلب الحجز
          </button>

        </form>

      </div>

    </div>
  );
}

export default Reservation;