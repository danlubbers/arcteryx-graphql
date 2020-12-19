import React from "react";
import styles from "../Loading/Loading.module.scss";
import logo from "../../assets/logo/arc-teryx.svg";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img className={styles.logo} src={logo} alt="logo" />
      <p>Content is Loading...</p>
    </div>
  );
};

export default Loading;
