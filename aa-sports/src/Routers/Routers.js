// src/Routers/Routers.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import ListProducts from '../components/product/ListProducts'; // Importe o ListProducts
import CartPage from "../pages/Cartpage/CartPage.js";
import NoPage from "../pages/NoPages";

const Routers = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ListProducts />} /> {/* Rota de produtos */}
                <Route path="/carrinho" element={<CartPage />} /> {/* Rota do carrinho */}
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;