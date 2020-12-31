import React, { useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import PWAModal from "./Components/PWAModal/PWAModal";
import Modal from "./Components/Modal/Modal";
import useIsIOS from "./utils/useIsIOS";

interface AppProps {
  location: {
    pathname: string;
  };
}

const App: React.FC<AppProps> = (props) => {
  // @ts-ignore
  const { prompt } = useIsIOS();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModalClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <Header location={props.location.pathname} />
      {/* Prompt is causing a memory leak error */}
      {prompt && !openModal ? (
        <PWAModal handleModalClick={handleModalClick} />
      ) : (
        <Modal />
      )}

      <div className="backgroundImage"></div>
    </div>
  );
};

export default App;
