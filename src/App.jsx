import { Routes, Route } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import CataloguePage from "./pages/CataloguePage.jsx";
import ProductPage from "./pages/ProductPage.jsx"; // 🔥 Обновили импорт на ProductPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<CataloguePage />} />
        <Route path="category/:categorySlug" element={<CataloguePage />} />

        <Route path="product/:productId" element={<ProductPage />} />

        <Route path="*" element={<CataloguePage />} />
      </Route>
    </Routes>
  );
}

export default App;
