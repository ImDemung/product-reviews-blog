import React from "react";
import { Link } from "react-router-dom";

export default function CatalogueProductCard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="catalogue-product-card"
    >
      <img src={product.image} alt={`Image of ${product.name}`} />
      <p>{product.name}</p>
    </Link>
  );
}