import React from "react";
import "./ProductCard.css";

export default function ProductCard({ imagem, nome, preco }) {
    return (
        <div className="product-card ">
            <img src={imagem} alt={nome} className="product-image"/>
            <h3>{nome}</h3>
            <p className="price">R${preco.toFixed(2)}</p>
            <button className="btn-add">adicionar ao carrinho</button>
        </div>
    )
}
