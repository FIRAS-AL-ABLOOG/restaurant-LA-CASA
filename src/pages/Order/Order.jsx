import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuMinus,
  LuPlus,
  LuTrash2,
  LuCheck,
} from "react-icons/lu";

import "./Order.css";

function Order({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 2 : 0;

  const total = subtotal + delivery;

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "تم إرسال طلبك بنجاح! سيتم التواصل معك لتأكيد الطلب."
    );
  };

  if (cart.length === 0) {
    return (
      <div className="empty-order">

        <div className="empty-order-icon">
          🛒
        </div>

        <h1>السلة فارغة</h1>

        <p>
          لم تضف أي وجبة إلى طلبك بعد.
        </p>

        <Link to="/menu">
          العودة إلى المنيو
        </Link>

      </div>
    );
  }

  return (
    <div className="order-page">

      <div className="order-header">

        <span>YOUR ORDER</span>

        <h1>طلبك</h1>

      </div>

      <div className="order-layout">

        {/* PRODUCTS */}

        <section className="cart-section">

          {cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <h3>{item.name}</h3>

                <strong>
                  ${item.price}
                </strong>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    <LuMinus />
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    <LuPlus />
                  </button>

                </div>

              </div>

              <button
                className="remove-item"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <LuTrash2 />
              </button>

            </div>

          ))}

        </section>

        {/* CHECKOUT */}

        <section className="checkout-section">

          <h2>بيانات الطلب</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              value={customer.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={customer.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="العنوان"
              value={customer.address}
              onChange={handleChange}
              required
            />

            <textarea
              name="notes"
              placeholder="ملاحظات إضافية"
              value={customer.notes}
              onChange={handleChange}
            />

            <div className="price-summary">

              <div>
                <span>المجموع</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>

              <div>
                <span>التوصيل</span>
                <strong>${delivery.toFixed(2)}</strong>
              </div>

              <div className="total-row">
                <span>الإجمالي</span>
                <strong>${total.toFixed(2)}</strong>
              </div>

            </div>

            <button className="submit-order">
              <LuCheck />
              تأكيد الطلب
            </button>

          </form>

        </section>

      </div>

    </div>
  );
}

export default Order;