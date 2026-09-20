import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES_DATA } from "../data/products";
import NavButton from "../components/NavButton";
import { RxMagnifyingGlass } from "react-icons/rx";
import "./Header.css";

export default function Header() {
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsCategoriesMenuOpen(false);
  }, [location]);

  const toggleCategoriesMenu = () => {
    setIsCategoriesMenuOpen(!isCategoriesMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/");
    }
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-nav-buttons">
          <Link to="/">
            <NavButton label="Каталог" />
          </Link>
          <NavButton label="Категории" onClick={toggleCategoriesMenu} />
        </div>

        <form
          onSubmit={handleSearchSubmit}
          className="header-search"
          role="search"
        >
          <input
            type="search"
            placeholder="Поиск..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit">
            <RxMagnifyingGlass size={24} />
          </button>
        </form>
      </nav>

      <div className="header-hero">
        <p>Мини-блог с обзорами о разнообразных продуктах</p>
      </div>

      <div
        className={`header-menu ${isCategoriesMenuOpen ? "open" : ""}`}
      >
        <ul className="header-menu-categories">
          {CATEGORIES_DATA.map((item) => (
            <NavLink
              key={item.category}
              to={`/category/${item.category}`}
              className="header-menu-category"
            >
              <NavButton label={item.label} />
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
}
