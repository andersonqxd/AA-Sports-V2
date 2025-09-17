import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products"; 
import CartPage from "../pages/Cartpage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"; 
import Suplementos from "../pages/Suplementos/Suplementos"; // ✅ novo import

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/suplementos" element={<Suplementos />} /> {/* ✅ nova rota */}
    </Routes>
  );
};

export default Routers;
