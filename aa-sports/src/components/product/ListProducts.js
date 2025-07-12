// src/components/product/ListProducts.js
import React from "react";
import { products } from "../../data/Products"; // renomeei a importação
import ProductCard from "../card/ProductCard";

export default function ProductList() {
    return (
        <div className="product-grid">
            {products.map((product) => ( // renomeei a variável
                <ProductCard
                    key={product.id}
                    product={product} // Passe o objeto inteiro
                />
            ))}
        </div>
    );
}