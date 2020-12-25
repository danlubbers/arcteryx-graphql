import React from "react";
import styles from "../RenderProducts/RenderProducts.module.scss";
import { Link } from "react-router-dom";
import { queryProps } from "../../utils/contentful-query-props";

interface RenderProductsProps {
  renderProducts: queryProps[];
}

const RenderProducts: React.FC<RenderProductsProps> = ({ renderProducts }) => {
  return (
    <div className={styles.productsContainer}>
      {renderProducts
        .map((product: queryProps, index: number) => {
          return (
            <div key={`products-${index}`}>
              <Link to={`/product/${product.slug}`}>
                <p className={styles.title}>{product.title}</p>
                <img
                  className={styles.productImage}
                  src={product.imagesCollection.items[0].url}
                  alt={product.title}
                />
              </Link>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default RenderProducts;
