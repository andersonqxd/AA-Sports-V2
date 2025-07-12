// NOVO CÓDIGO para src/pages/Home.js
import React from "react";
import "./Home.css";
import banner from "../assets/icons/banner/1367_desk_full_campanha_payday.gif";
import ListProducts from "../components/product/ListProducts";

const Home = () => {
  return (
    <div className="home-page">
      <img src={banner} alt="Banner de promoção" className="home-banner" />
      
      {/* Adicionamos o nosso contentor aqui */}
      <div className="container">
        <h2 className="section-title">Nossos Produtos</h2>
        <ListProducts />
      </div>
    </div>
  );
};

export default Home;