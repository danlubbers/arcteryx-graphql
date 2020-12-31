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
      {/* <p>
        {`${renderProducts.length} ${renderProducts[0].gender} Products found!`}{" "}
      </p> */}
      {renderProducts
        .map((product: queryProps, index: number) => {
          return (
            <div key={`products-${index}`}>
              <Link to={`/product/${product.slug}`}>
                <img
                  className={styles.productImage}
                  src={product.imagesCollection.items[0].url}
                  alt={product.title}
                />
                <p className={styles.title}>{product.title}</p>
              </Link>
            </div>
          );
        })
        .reverse()}
    </div>
  );
};

export default RenderProducts;
