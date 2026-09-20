import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>Мини-блог с обзорами о разнообразных продуктах</p>
      <a href="https://github.com/imdemung" target="_blank" rel="noreferrer">
        <RxGithubLogo className="footer-github-icon" size={40}/>
      </a>
    </footer>
  );
}