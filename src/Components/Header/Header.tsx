import React, { useState } from "react";
import styles from "../Header/Header.module.scss";
import logo from "../../assets/logo/arc-teryx.svg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [showNavList, setShowNavList] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <nav className={styles.navbarWrapper}>
        <p
          className={styles.productsText}
          onClick={() => setShowNavList(!showNavList)}
        >
          Products
        </p>
        {showNavList && (
          <ul className={styles.navListWrapper}>
            <Link to="/products/mens">
              <li>Mens</li>
            </Link>
            <Link to="/products/womens">
              <li>Womens</li>
            </Link>
          </ul>
        )}
        <Link to="/search">
          <FaSearch className={styles.search} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
