import React from "react";
import "./assets/style.css"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"

export default function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
    </div>
  )
}