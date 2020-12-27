import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";

interface AppProps {
  location: {
    pathname: string;
  };
}

const App: React.FC<AppProps> = (props) => {
  return (
    <div className="App">
      <Header location={props.location.pathname} />
      <Modal />
      <div className="backgroundImage"></div>
    </div>
  );
};

export default App;
