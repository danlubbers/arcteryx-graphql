import React from "react";
import "./App.css";
import winterScene from "./assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg";
import Header from "./Components/Header/Header";
import Products from "./views/Products/products";

function App() {
  return (
    <div className="App">
      <Header />
      <img style={{ width: "100%" }} src={winterScene} alt="winter-scene" />
      <Products />
    </div>
  );
}

export default App;
