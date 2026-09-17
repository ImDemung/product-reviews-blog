import React from "react";
import CatalogueGridCard from "./CatalogueGridCard";

export default function Catalogue({
  products,
  onHoverGridCard,
  onSelectProduct,
}) {
  return (
    <main className="catalogue-container">
      {products.map((product) => (
        <CatalogueGridCard
          key={product.id}
          product={product}
          onHoverGridCard={onHoverGridCard}
          onClick={() => onSelectProduct(product.id)}
        />
      ))}
    </main>
  );
}
