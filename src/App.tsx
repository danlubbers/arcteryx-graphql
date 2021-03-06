import React, { useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import PWAModal from "./Components/PWAModal/PWAModal";
import Modal from "./Components/Modal/Modal";
import useIsIOS from "./utils/useIsIOS";
import Portal from "./Components/Portal/Portal";

interface AppProps {
  location: {
    pathname: string;
  };
}

const App: React.FC<AppProps> = (props) => {
  const pathname = props.location && props.location.pathname;
  // @ts-ignore
  const { prompt } = useIsIOS();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModalClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <Header location={pathname} />

      {prompt && !openModal ? (
        <Portal>
          <PWAModal handleModalClick={handleModalClick} />
        </Portal>
      ) : (
        <Modal />
      )}

      <div className="backgroundImage" data-testid="background-image"></div>
    </div>
  );
};

export default App;
