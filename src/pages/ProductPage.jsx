import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_DATA } from "../data/products";
import "./ProductPage.css";

export default function ProductPage() {
  const { productId } = useParams();

  const product = PRODUCTS_DATA.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="product-card-container">
        <div className="product-not-found">
          <h1>Товар не найден</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card-container">
      <article className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-rating-box">
            <span>Рейтинг:</span>
            <span> {product.rating}/10</span>
            <span className="stars-text">
              {"★".repeat(product.rating)}
              {"☆".repeat(10 - product.rating)}
            </span>
          </div>
          <p>{product.info}</p>
        </div>
      </article>

      <section>
        <h2>Мой отзыв</h2>
        <p>{product.review}</p>
      </section>
    </div>
  );
}
