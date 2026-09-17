import React from "react";

export default function ProductCard({ product, theme }) {
  const stars = "★".repeat(product.rating) + "☆".repeat(10 - product.rating);

  return (
    <main className="product-card-container">
      <div className="product-card">
        <img src={product.image} alt={`Image of ${product.name}`} />
        <div className="product-card-info">
          <p>{product.name}</p><br />
          <p>
            Оценка: {product.rating}/10 {stars}
          </p><br />
          <p>{product.info}</p>
        </div>
      </div>
      <div className="product-card-review">
        <p>{product.review}</p>
      </div>
    </main>
  );
}
