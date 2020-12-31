import React, { useState } from "react";
import styles from "./PWAModal.module.scss";
import ArcLogo from "../../assets/logo/arc-teryx.svg";
import AppleShareIcon from "../../assets/logo/apple-share-icon.png";

interface PWAModalProps {
  open: boolean;
}

const PWAModal: React.FC<PWAModalProps> = ({ open }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  return (
    <>
      {isOpen && (
        <div className={styles.pwaModalContainer}>
          <img className={styles.logo} src={ArcLogo} alt="arcteryx-logo" />
          <h4>Install Arc'teryx</h4>
          <p className={styles.installText}>
            Install this application on your homescreen for a better user
            experience
          </p>
          <p className={styles.tapText}>
            Tap{" "}
            <img
              className={styles.appleShareIcon}
              src={AppleShareIcon}
              alt="apple share icon"
            />{" "}
            then scroll down and tap{" "}
          </p>
          <p className={styles.addToHomeScreen}>"Add to Home Screen"</p>

          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            CLOSE
          </button>
        </div>
      )}
    </>
  );
};

export default PWAModal;
