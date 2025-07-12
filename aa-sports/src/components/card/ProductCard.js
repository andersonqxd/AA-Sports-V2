// src/components/card/ProductCard.js
import React from "react";
import "./ProductCard.css";
import { useCart } from "../../contexts/CartContext"; // 1. Importe o hook

export default function ProductCard({ product }) { // 2. Receba o objeto completo do produto
    const { addToCart } = useCart(); // 3. Obtenha a função do contexto

    return (
        <div className="product-card">
            {/* 4. Use o caminho da imagem como string */}
            <img src={`/images/products/${product.image}`} alt={product.name} className="product-image"/>
            <h3>{product.name}</h3>
            <p className="price">R${product.price.toFixed(2)}</p>
            {/* 5. Chame a função addToCart ao clicar */}
            <button onClick={() => addToCart(product)} className="btn-add">
                Adicionar ao Carrinho
            </button>
        </div>
    );
}