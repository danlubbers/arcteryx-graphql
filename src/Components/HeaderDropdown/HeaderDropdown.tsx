import React from "react";
import styles from "../HeaderDropdown/HeaderDropdown.module.scss";
import { Link } from "react-router-dom";

interface HeaderDropdownProps {
  gender: string;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ gender }) => {
  return (
    <ul className={styles.navListWrapper}>
      <Link
        to={`/products/${gender}/clothing`}
        aria-label={`${gender} clothing`}
        data-testid={`gender-clothing`}
      >
        <li>Clothing</li>
      </Link>
      <Link to={`/products/${gender}/packs`} aria-label={`${gender} packs`}>
        <li>Packs</li>
      </Link>
    </ul>
  );
};

export default HeaderDropdown;
