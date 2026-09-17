import React, { useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";

import "./Menu.css";

const menuItems = [

  // ================= PIZZA =================

  {
    id: 1,
    name: "Margherita",
    category: "pizza",
    price: 9,
    description: "طماطم، موزاريلا، ريحان وزيت زيتون.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
    popular: true,
  },

  {
    id: 2,
    name: "Pepperoni",
    category: "pizza",
    price: 12,
    description: "موزاريلا، صلصة الطماطم وشرائح البيبروني.",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80",
    popular: true,
  },

  {
    id: 3,
    name: "Four Cheese",
    category: "pizza",
    price: 13,
    description: "أربع أنواع من الجبن مع صلصة خاصة.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 4,
    name: "Chicken BBQ",
    category: "pizza",
    price: 13,
    description: "دجاج، موزاريلا، بصل وصلصة BBQ.",
    image:
      "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=900&q=80",
  },

  // ================= BURGERS =================

  {
    id: 5,
    name: "Classic Burger",
    category: "burgers",
    price: 11,
    description: "لحم بقري، خس، طماطم، جبنة وصوص المطعم.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    popular: true,
  },

  {
    id: 6,
    name: "Double Burger",
    category: "burgers",
    price: 14,
    description: "قطعتان من اللحم مع جبنة وصوص خاص.",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
  },

  // ================= PASTA =================

  {
    id: 7,
    name: "Penne Alfredo",
    category: "pasta",
    price: 10,
    description: "باستا مع صوص ألفريدو الكريمي والدجاج.",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 8,
    name: "Spaghetti Bolognese",
    category: "pasta",
    price: 11,
    description: "سباغيتي مع صوص البولونيز والبارميزان.",
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=900&q=80",
  },

  // ================= STARTERS =================

  {
    id: 9,
    name: "French Fries",
    category: "starters",
    price: 5,
    description: "بطاطا مقلية مقرمشة مع صوص المطعم.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 10,
    name: "Chicken Wings",
    category: "starters",
    price: 8,
    description: "أجنحة دجاج متبلة مع صوص خاص.",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80",
  },

  // ================= DRINKS =================

  {
    id: 11,
    name: "Fresh Lemonade",
    category: "drinks",
    price: 4,
    description: "ليمون طازج، نعناع وثلج.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 12,
    name: "Iced Coffee",
    category: "drinks",
    price: 5,
    description: "قهوة باردة مع الحليب والثلج.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },

  // ================= MOCKTAILS =================

  {
    id: 13,
    name: "Berry Mojito",
    category: "cocktails",
    price: 7,
    description: "توت، ليمون، نعناع ومياه غازية.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 14,
    name: "Tropical Mix",
    category: "cocktails",
    price: 7,
    description: "مانجو، أناناس، برتقال وثلج.",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80",
  },

  // ================= DESSERT =================

  {
    id: 15,
    name: "Cheesecake",
    category: "desserts",
    price: 7,
    description: "تشيزكيك كريمي مع صوص التوت.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 16,
    name: "Chocolate Cake",
    category: "desserts",
    price: 7,
    description: "كيك شوكولا غني مع صوص الشوكولا.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  { id: "all", name: "الكل" },
  { id: "pizza", name: "بيتزا" },
  { id: "burgers", name: "برغر" },
  { id: "pasta", name: "باستا" },
  { id: "starters", name: "مقبلات" },
  { id: "drinks", name: "مشروبات" },
  { id: "cocktails", name: "كوكتيلات" },
  { id: "desserts", name: "حلويات" },
];

function Menu({ addToCart }) {

  const [category, setCategory] = useState("all");

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === category
        );

  return (
    <div className="menu-page">

      <section className="menu-header">

        <span>OUR MENU</span>

        <h1>قائمة الطعام</h1>

        <p>
          اختر ما يناسبك من أطباقنا المحضرة بعناية.
        </p>

      </section>

      <div className="category-container">

        {categories.map((item) => (
          <button
            key={item.id}
            className={
              category === item.id
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setCategory(item.id)}
          >
            {item.name}
          </button>
        ))}

      </div>

      <section className="menu-grid">

        {filteredItems.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}

      </section>

    </div>
  );
}

export default Menu;