import React, { useEffect, useState } from "react";
import styles from "../Header/Header.module.scss";
import logo from "../../assets/logo/arc-teryx.svg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
interface HeaderProps {
  location?: string;
}

const Header: React.FC<HeaderProps> = ({ location }) => {
  const [showMensNavList, setShowMensNavList] = useState<boolean>(false);
  const [showWomensNavList, setShowWomensNavList] = useState<boolean>(false);

  useEffect(() => {
    setShowMensNavList(false);
    setShowWomensNavList(false);
  }, [location]);

  return (
    <main>
      <Link to="/" aria-label="arcteryx logo">
        <img
          className={styles.logo}
          src={logo}
          alt="arcteryx logo"
          onClick={() => {
            setShowMensNavList(false);
            setShowWomensNavList(false);
          }}
        />
      </Link>
      <nav>
        <div className={styles.productsWrapper}>
          <p
            className={styles.productsText}
            onClick={() => {
              setShowMensNavList(!showMensNavList);
              setShowWomensNavList(false);
            }}
          >
            Mens
          </p>
          {showMensNavList && <HeaderDropdown gender="mens" />}
          <p
            className={styles.productsText}
            onClick={() => {
              setShowWomensNavList(!showWomensNavList);
              setShowMensNavList(false);
            }}
          >
            Womens
          </p>
          {showWomensNavList && <HeaderDropdown gender="womens" />}
        </div>
        <Link to="/search" aria-label="search">
          <FaSearch className={styles.search} data-testid="search" />
        </Link>
      </nav>
    </main>
  );
};

export default Header;
