// CÓDIGO CORRIGIDO para src/App.js

import React from 'react';
import Routers from './Routers/Routers';
import { CartProvider } from './contexts/CartContext';

// 1. Importamos o componente Header
import Header from './components/header/Header';

function App() {
  return (
    // O CartProvider continua a envolver tudo
    <CartProvider>
      {/* 2. Adicionamos o Header aqui, antes das rotas */}
      <Header />
      
      {/* As rotas são renderizadas abaixo do cabeçalho */}
      <Routers />
    </CartProvider>
  );
}

export default App;