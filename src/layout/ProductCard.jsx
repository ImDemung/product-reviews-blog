import React from "react";

export default function ProductCard({ product, theme }) {
  const stars = "★".repeat(product.rating) + "☆".repeat(10 - product.rating);

  return (
    <main className="product-card-container">
      <div className="product-card">
        <img src={product.image} alt={`Изображение ${product.name}`} />
        <div className="product-card-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating-box">
            Оценка: {product.rating}/10 <span className="stars-text">{stars}</span>
          </div>
          <div className="product-info-text">
            <p>{product.info}</p>
          </div>
        </div>
      </div>
      <div className="product-card-review">
        <h2 className="review-title">Мнение автора</h2>
        <p className="review-text">{product.review}</p>
      </div>
    </main>
  );
}