import React from "react";
import "./App.css";
import winterScene from "./assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <img style={{ width: "100%" }} src={winterScene} alt="winter-scene" />
    </div>
  );
}

export default App;
