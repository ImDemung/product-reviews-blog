import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { PRODUCTS_DATA } from "../data/products";
import CatalogueProductCard from "../components/CatalogueProductCard";
import "./CataloguePage.css";

export default function CataloguePage() {
  // 1. Считываем категорию из URL (например, /category/chips)
  const { categorySlug } = useParams();

  // 2. Считываем поисковый запрос из URL (например, ?search=лимонад)
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // 3. Фильтруем нашу базу данных по обоим параметрам одновременно
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = !categorySlug || product.category === categorySlug;
    const matchesSearch =
      !searchQuery || product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="catalogue-container">
          {filteredProducts.map((product) => (
            <CatalogueProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-products-message">
          <h1>Товары не найдены</h1>
          <p>Попробуйте ввести другое название или сбросить фильтры.</p>
        </div>
      )}
    </>
  );
}
