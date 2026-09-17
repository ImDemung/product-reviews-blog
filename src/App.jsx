import { useEffect, useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import Catalogue from "./layout/Catalogue";
import Footer from "./layout/Footer";
import ProductCard from "./layout/ProductCard";
import '@fontsource-variable/roboto'; 

import img_bolzhau_crab_chips from "./assets/bolzhau_crab_chips.webp";
import img_chipsony_crab_chips from "./assets/chipsony_crab_chips.webp";
import img_lemonade_pavlodar_drinks from "./assets/lemonade_pavlodar_drinks.webp";
import img_lemonade_holiday_drinks from "./assets/lemonade_holiday_drinks.webp";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Чипсы со вкусом краба «Болжау»",
    category: "Чипсы",
    image: img_bolzhau_crab_chips,
    theme: { bg: "#317fa3", text: "#FFFFFF" },
    rating: 8,
    info: `Легкие воздушные чипсы
    Из нецельного картофеля 
    В форме крабиков

    Пищевая ценность на 100 г: 
    Белки 1,5 г Жиры 32 г Углеводы 53 г
    Энергетическая ценность: 
    2110 кДж/510 ккал`,
    review: `Эксклюзив Казахстана, поэтому цена ниже конкурентов. Форма краба позволяет лучше держать их и даже откусывать части. Рекомендую, если вы живете в Казахстане и хотите простых и вкусных чипсов.`,
  },
  {
    id: 2,
    name: "Лимонад «Павлодарский»",
    category: "Напитки",
    image: img_lemonade_pavlodar_drinks,
    theme: { bg: "#f0e18c", text: "#468659" },
    rating: 10,
    info: `Простой газированный лимонад
    Классический ароматизатор Дюшес

    Пищевая ценность на 100 мл: 
    Белки 0 г Жиры 0 г Углеводы 9,5 г
    Энергетическая ценность: 
    162 кДж/38 ккал`,
    review: `В меру сладкий и освежающий. Низкая цена, так как простой рецепт. Не очень сильно газированный, что приятно. Рекомендую как простой и вкусный лимонад.`,
  },
  {
    id: 3,
    name: "Чипсы со вкусом краба «Чипсоны»",
    category: "Чипсы",
    image: img_chipsony_crab_chips,
    theme: { bg: "#367c88", text: "#FEF08A" },
    rating: 3,
    info: `Легкие воздушные чипсы
    Из нецельного картофеля 
    В форме крабиков

    Пищевая ценность на 100 г: 
    Белки 1,5 г Жиры 32 г Углеводы 53 г
    Энергетическая ценность: 
    2110 кДж/510 ккал`,
    review: `Красивый дизайн упаковки с градиентом. Более дорогая пародия на чипсы со вкусом краба «Болжау». Производитель тот же, но продается с наценкой в разных странах. Если вы живете в Казахстане, то смысла покупать их нет.`,
  },
  {
    id: 4,
    name: "Лимонад «Holiday»",
    category: "Напитки",
    image: img_lemonade_holiday_drinks,
    theme: { bg: "#e5c137", text: "#156318" },
    rating: 7,
    info: `Сладкий газированный лимонад 
    По итальянской лицензии 
    Bevanda Premium Limonada
    Необычный привкус 
    с нотками цитрусовых

    Пищевая ценность на 100 мл: 
    Белки 0 г Жиры 0 г Углеводы 11 г
    Энергетическая ценность: 
    190 кДж/45 ккал`,
    review: `Красивый дизайн бутылки. Необычный вкус, но быстро надоедает. Сильно газированный. Рекомендую для компании, так как вкус быстро приедается.`,
  },
  {
    id: 5,
    name: "Чипсы со вкусом краба «Болжау»",
    category: "Чипсы",
    image: img_bolzhau_crab_chips,
    theme: { bg: "#317fa3", text: "#FFFFFF" },
    rating: 8,
    info: `Легкие воздушные чипсы
    Из нецельного картофеля 
    В форме крабиков

    Пищевая ценность на 100 г: 
    Белки 1,5 г Жиры 32 г Углеводы 53 г
    Энергетическая ценность: 
    2110 кДж/510 ккал`,
    review: `Эксклюзив Казахстана, поэтому цена ниже конкурентов. Форма краба позволяет лучше держать их и даже откусывать части. Рекомендую, если вы живете в Казахстане и хотите простых и вкусных чипсов.`,
  },
  {
    id: 6,
    name: "Лимонад «Павлодарский»",
    category: "Напитки",
    image: img_lemonade_pavlodar_drinks,
    theme: { bg: "#f0e18c", text: "#468659" },
    rating: 10,
    info: `Простой газированный лимонад
    Классический ароматизатор Дюшес

    Пищевая ценность на 100 мл: 
    Белки 0 г Жиры 0 г Углеводы 9,5 г
    Энергетическая ценность: 
    162 кДж/38 ккал`,
    review: `В меру сладкий и освежающий. Низкая цена, так как простой рецепт. Не очень сильно газированный, что приятно. Рекомендую как простой и вкусный лимонад.`,
  },
  {
    id: 7,
    name: "Чипсы со вкусом краба «Чипсоны»",
    category: "Чипсы",
    image: img_chipsony_crab_chips,
    theme: { bg: "#367c88", text: "#FEF08A" },
    rating: 3,
    info: `Легкие воздушные чипсы
    Из нецельного картофеля 
    В форме крабиков

    Пищевая ценность на 100 г: 
    Белки 1,5 г Жиры 32 г Углеводы 53 г
    Энергетическая ценность: 
    2110 кДж/510 ккал`,
    review: `Красивый дизайн упаковки с градиентом. Более дорогая пародия на чипсы со вкусом краба «Болжау». Производитель тот же, но продается с наценкой в разных странах. Если вы живете в Казахстане, то смысла покупать их нет.`,
  },
  {
    id: 8,
    name: "Лимонад «Holiday»",
    category: "Напитки",
    image: img_lemonade_holiday_drinks,
    theme: { bg: "#e5c137", text: "#156318" },
    rating: 7,
    info: `Сладкий газированный лимонад 
    По итальянской лицензии 
    Bevanda Premium Limonada
    Необычный привкус 
    с нотками цитрусовых

    Пищевая ценность на 100 мл: 
    Белки 0 г Жиры 0 г Углеводы 11 г
    Энергетическая ценность: 
    190 кДж/45 ккал`,
    review: `Красивый дизайн бутылки. Необычный вкус, но быстро надоедает. Сильно газированный. Рекомендую для компании, так как вкус быстро приедается.`,
  },
];

function App() {
  const [productsData, setProductsData] = useState(PRODUCTS_DATA);
  const [activeCategory, setActiveCategory] = useState("Каталог");
  const [activeTheme, setActiveTheme] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedProduct(null);
    setActiveCategory(category);
    setActiveTheme(null);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const handleSelectProduct = (id) => {
    setSelectedProduct(id);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const filteredProducts =
    activeCategory === "Каталог"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((product) => product.category === activeCategory);

  const selectedProductData = PRODUCTS_DATA.find(
    (product) => product.id === selectedProduct,
  );

  return (
    <>
      <Header
        onSelectCategory={handleCategoryChange}
        theme={activeTheme}
        categories={[
          "Каталог",
          ...new Set(PRODUCTS_DATA.map((product) => product.category)),
        ]}
      />
      {selectedProduct && selectedProductData ? (
        <ProductCard product={selectedProductData} theme={activeTheme} />
      ) : (
        <Catalogue
          products={filteredProducts}
          onHoverGridCard={(theme) => setActiveTheme(theme)}
          onSelectProduct={handleSelectProduct}
        />
      )}

      <Footer theme={activeTheme} />
    </>
  );
}

export default App;
