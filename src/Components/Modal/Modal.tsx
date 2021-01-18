import React from "react";
import styles from "../Modal/Modal.module.scss";
import { Link } from "react-router-dom";
import useContentful from "../../hooks/use-contentful";
import { query } from "../../utils/contentful-query";

const Modal = () => {
  const { products } = useContentful(query, null);
  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <div className={styles.modalContainer} data-testid="modal-component">
      <Link to={`/product/${randomProduct && randomProduct.slug}`}>
        <p className={styles.title}>{randomProduct && randomProduct.title}</p>
        <img
          className={styles.productImage}
          src={randomProduct && randomProduct.imagesCollection.items[0].url}
          alt={randomProduct && randomProduct.title}
        />
      </Link>
    </div>
  );
};

export default Modal;
