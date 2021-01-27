import React from "react";
import styles from "./FullscreenImage.module.scss";
import Portal from "../Portal/Portal";
import ScrollToTop from "../../utils/scrollToTop";
import { FaTimes } from "react-icons/fa";

interface FullscreenImageProps {
  setShowFullscreen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  productImage: string;
  productTitle: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({
  setShowFullscreen,
  productImage,
  productTitle,
}) => {
  return (
    <>
      <Portal>
        <ScrollToTop />
        <div className={styles.fullscreenImageContainer}>
          <div className={styles.iconWrapper}>
            <FaTimes
              className={styles.icon}
              onClick={() => setShowFullscreen(false)}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.productImage}
              src={productImage}
              alt={productTitle}
            />
          </div>
        </div>
      </Portal>
    </>
  );
};

export default FullscreenImage;
