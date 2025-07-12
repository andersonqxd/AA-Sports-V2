// src/pages/CartPage/CartPage.js
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Meu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={`/images/products/${item.image}`} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>R$ {item.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <button onClick={() => removeFromCart(index)} className="remove-button">
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Resumo do Pedido</h3>
            <p>Total: <strong>R$ {totalPrice.toFixed(2).replace('.', ',')}</strong></p>
            <button className="checkout-button">Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;