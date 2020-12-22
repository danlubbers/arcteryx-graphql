import React, { useState } from "react";
import styles from "../Header/Header.module.scss";
import logo from "../../assets/logo/arc-teryx.svg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [showNavList, setShowNavList] = useState(false);

  return (
    <main>
      <Link to="/" aria-label="arcteryx logo">
        <img className={styles.logo} src={logo} alt="arcteryx logo" />
      </Link>
      <nav>
        <p
          className={styles.productsText}
          onClick={() => setShowNavList(!showNavList)}
        >
          Products
        </p>
        {showNavList && (
          <ul className={styles.navListWrapper}>
            <Link
              to="/products/mens"
              onClick={() => setShowNavList(!showNavList)}
              aria-label="mens"
            >
              <li>Mens</li>
            </Link>
            <Link
              to="/products/womens"
              onClick={() => setShowNavList(!showNavList)}
              aria-label="womens"
            >
              <li>Womens</li>
            </Link>
          </ul>
        )}
        <Link to="/search" aria-label="search">
          <FaSearch className={styles.search} />
        </Link>
      </nav>
    </main>
  );
}

export default Header;
