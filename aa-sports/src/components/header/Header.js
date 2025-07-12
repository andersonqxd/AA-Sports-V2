// VERSÃO FINAL E CORRIGIDA para src/components/header/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

// Os caminhos corretos, voltando duas pastas para trás
import logo from '../../assets/icons/logo/logo.png';
import cart from '../../assets/icons/logo/cart.png';

import './Header.css';

function Header() {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="AA-Sports Logo" className="logo-img" />
        </NavLink>

        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/produtos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Produtos
          </NavLink>
        </nav>

        <NavLink to="/carrinho" className="cart-link">
          <img src={cart} alt="Carrinho de compras" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;