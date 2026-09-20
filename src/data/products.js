import img_bolzhau_crab_chips from "../assets/bolzhau_crab_chips.webp";
import img_chipsony_crab_chips from "../assets/chipsony_crab_chips.webp";
import img_pavlodar_lemonade_drinks from "../assets/pavlodar_lemonade_drinks.webp";
import img_holiday_lemonade_drinks from "../assets/holiday_lemonade_drinks.webp";

export const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Чипсы со вкусом краба «Болжау»",
    category: "chips",
    categoryLabel: "Чипсы",
    image: img_bolzhau_crab_chips,
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
    category: "drinks",
    categoryLabel: "Напитки",
    image: img_pavlodar_lemonade_drinks,
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
    category: "chips",
    categoryLabel: "Чипсы",
    image: img_chipsony_crab_chips,
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
    category: "drinks",
    categoryLabel: "Напитки",
    image: img_holiday_lemonade_drinks,
    rating: 7,
    info: `Сладкий газированный лимонад 
    По итальянской лицензии Bevanda Premium Limonada
    Необычный привкус с нотками цитрусовых

    Пищевая ценность на 100 мл: 
    Белки 0 г Жиры 0 г Углеводы 11 г
    Энергетическая ценность: 
    190 кДж/45 ккал`,
    review: `Красивый дизайн бутылки. Необычный вкус, но быстро надоедает. Сильно газированный. Рекомендую для компании, так как вкус быстро приедается.`,
  },
];

const categoriesMap = {};

PRODUCTS_DATA.forEach((product) => {
  if (!categoriesMap[product.category]) {
    categoriesMap[product.category] = {
      category: product.category,
      label: product.categoryLabel,
    };
  }
});

export const CATEGORIES_DATA = Object.values(categoriesMap);
