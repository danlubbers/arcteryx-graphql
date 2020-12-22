import React from "react";
import "./App.scss";
import winterScene from "./assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={winterScene} alt="winter-scene" />
    </div>
  );
}

export default App;
