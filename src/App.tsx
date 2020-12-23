import React from "react";
import "./App.scss";
import winterScene from "./assets/images/20200307_F20WinterMerch_MtCurrie_Percival_DSC00066shrp-mobile.jpg";
import Header from "./Components/Header/Header";

interface AppProps {
  location: {
    pathname: string;
  };
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="App">
      <Header location={props.location.pathname} />
      <img src={winterScene} alt="winter-scene" />
    </div>
  );
};

export default App;
