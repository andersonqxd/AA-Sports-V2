// Código CORRIGIDO para src/Routers/Routers.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
// 1. O caminho agora aponta para a pasta e ficheiro corretos
import Products from "../pages/Products/Products"; 
import CartPage from "../pages/Cartpage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"; 

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* A rota continua a mesma, mas agora o componente existe! */}
      <Route path="/produtos" element={<Products />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default Routers;