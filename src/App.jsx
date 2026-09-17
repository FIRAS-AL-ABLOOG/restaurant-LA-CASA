import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";
import Reservation from "./pages/Reservation/Reservation";
import Location from "./pages/Location/Location";
import About from "./pages/About/About";

import "./App.css";

function App() {
  // السلة المشتركة بين صفحات الموقع
  const [cart, setCart] = useState([]);

  // إضافة منتج للسلة
  const addToCart = (item) => {
    setCart((oldCart) => {
      const existing = oldCart.find(
        (product) => product.id === item.id
      );

      if (existing) {
        return oldCart.map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        );
      }

      return [
        ...oldCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  // زيادة الكمية
  const increaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // إنقاص الكمية
  const decreaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // حذف المنتج
  const removeFromCart = (id) => {
    setCart((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <div className="app">

        {/* Navbar أصبح داخل BrowserRouter */}
        <Navbar cartCount={cart.length} />

        <main>
          <Routes>

            {/* الرئيسية */}
            <Route
              path="/"
              element={
                <Home addToCart={addToCart} />
              }
            />

            {/* قائمة الطعام */}
            <Route
              path="/menu"
              element={
                <Menu addToCart={addToCart} />
              }
            />

            {/* الطلب */}
            <Route
              path="/order"
              element={
                <Order
                  cart={cart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />

            {/* الحجز */}
            <Route
              path="/reservation"
              element={<Reservation />}
            />

            {/* الموقع */}
            <Route
              path="/location"
              element={<Location />}
            />

            {/* من نحن */}
            <Route
              path="/about"
              element={<About />}
            />

          </Routes>
        </main>

        {/* Footer أيضاً داخل BrowserRouter */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;