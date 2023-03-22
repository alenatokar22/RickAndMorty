import React from "react";
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={logo} alt="logo" className="logo__img" />
      </a>
    </div>
  );
}
