import Header from "../components/header/Header";
import Layout from "../components/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";         // Nome correto aqui!
import NoPage from "../pages/NoPages";     // Verifique se esse arquivo existe MESMO


const Routers = () => {
    return (
    <BrowserRouter>        
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Contact />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    );
};

export default Routers;
