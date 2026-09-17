import React from "react";

export default function CatalogueGridCard({
  product,
  onHoverGridCard,
  onClick,
}) {
  return (
    <button
      className="catalogue-item"
      onMouseEnter={() => onHoverGridCard(product.theme || null)}
      onMouseLeave={() => onHoverGridCard(null)}
      onClick={onClick}
    >
      <img src={product.image} alt={`Image of ${product.name}`} />
      <p>{product.name}</p>
    </button>
  );
}
