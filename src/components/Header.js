import React from "react";
import reactLogo from "../assets/react-icon-small.png"

export default function Header() {
  return (
    <nav>
        <img src={reactLogo} className="nav--icon" alt="react logo"/>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
)
}