
// src/components/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/Flux_Dev_Modern_and_eyecatching_logo_design_for_a_local_sports_0.jpg"; // renomeie a imagem gerada para logo.png
import carrinhoImg from "../../assets/icons/carrinho-de-compras.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="AA Sports" className="logo" />
      </div>

      <div className="header-center">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/produtos" className="header-link">Produtos</Link>
      </div>

      <div className="header-right">
        <Link to="/carrinho">
          <img src={carrinhoImg} alt="Carrinho" className="cart-icon" />
        </Link>
      </div>
    </header>
  );
}
