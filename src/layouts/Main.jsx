import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./Main.css"; 

export default function Main() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}