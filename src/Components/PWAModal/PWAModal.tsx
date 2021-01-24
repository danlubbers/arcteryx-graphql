import React from "react";
import styles from "./PWAModal.module.scss";
import ArcLogo from "../../assets/logo/arc-teryx.svg";
import AppleShareIcon from "../../assets/logo/apple-share-icon.png";

interface PWAModalProps {
  handleModalClick: () => void;
}

const PWAModal: React.FC<PWAModalProps> = ({ handleModalClick }) => {
  return (
    <>
      <div
        className={styles.pwaModalContainer}
        data-testid="pwa-modal-component"
      >
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

        <button className={styles.closeBtn} onClick={handleModalClick}>
          CLOSE
        </button>
      </div>
    </>
  );
};

export default PWAModal;
