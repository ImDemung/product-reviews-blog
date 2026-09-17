import React from "react";
import NavButton from "../components/NavButton";

export default function Header({ onSelectCategory, theme, categories }) {
  return (
    <header
      className={"header-container"}
      style={{ "--product-bg-color": theme?.bg }}
    >
      <nav className={"nav-list"}>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <NavButton
                label={category}
                color={theme?.text}
                onClick={() => onSelectCategory(category)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
