import React from "react";
import { RxGithubLogo } from "react-icons/rx";

export default function Footer({ theme }) {
  return (
    <footer
      className="footer-container"
      style={{
        "--product-bg-color": theme?.bg,
        "--product-text-color": theme?.text,
      }}
    >
      <p>Блог с отзывами об разнообразных продуктах</p>
      <a href="https://github.com/imdemung" target="blank_">
        <RxGithubLogo className="footer-github-icon" />
      </a>
    </footer>
  );
}
