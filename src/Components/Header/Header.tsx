import React from "react";
import styles from "../Header/Header.module.scss";
import logo from "../../assets/logo/arc-teryx.svg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <nav className={styles.navbarWrapper}>
        <Link to="/products">
          <p className={styles.productsText}>Products</p>
        </Link>
        <Link to="/search">
          <FaSearch className={styles.search} />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
