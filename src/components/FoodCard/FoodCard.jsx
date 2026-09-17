import React from "react";
import { LuPlus } from "react-icons/lu";

import "./FoodCard.css";

function FoodCard({ item, addToCart }) {
  return (
    <article className="food-card">

      <div className="food-image-wrapper">

        <img
          src={item.image}
          alt={item.name}
        />

        {item.popular && (
          <span className="popular-badge">
            الأكثر طلباً
          </span>
        )}

      </div>

      <div className="food-content">

        <div className="food-title-row">

          <h3>{item.name}</h3>

          <strong>
            ${item.price}
          </strong>

        </div>

        <p>
          {item.description}
        </p>

        <button
          className="add-food-button"
          onClick={() => addToCart(item)}
        >
          <LuPlus />
          إضافة للطلب
        </button>

      </div>

    </article>
  );
}

export default FoodCard;