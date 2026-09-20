import React from "react";

export default function NavButton({ label, onClick, className }) {
  return (
    <button onClick={onClick} className={className} type="button">
      {label}
    </button>
  );
}
