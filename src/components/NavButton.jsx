import React from "react";

export default function NavButton({ label, color, onClick }) {
  return (
    <button className="nav-btn" onClick={onClick} style={{ "--product-text-color": color }}>
      {label}
    </button>
  );
}
