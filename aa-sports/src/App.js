// src/App.js
import React from 'react';
import Routers from './Routers/Routers';
import { CartProvider } from './contexts/CartContext'; // Importe o Provider

function App() {
  return (
    <CartProvider> {/* Envolva o Routers com o provider */}
      <Routers />
    </CartProvider>
  );
}

export default App;