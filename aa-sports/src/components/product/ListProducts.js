import React from "react";
import {produtos} from "../../data/Products";
import ProductCard from "../card/ProductCard";


export default function ProductList() {
    return (
    <div className="product-grid">
        {produtos.map((produto) => (
            <ProductCard
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
        />
        ))}
    </div>
    );
}