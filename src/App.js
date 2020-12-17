import React from "react";
import "./App.css";
import logo from "./assets/arc-teryx.svg";
import Products from "./views/Products/products";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" style={{ width: 100 }} />
      <Products />
    </div>
  );
}

export default App;
