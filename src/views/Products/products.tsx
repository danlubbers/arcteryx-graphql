import React from "react";
import styles from "../Products/products.module.scss";
import useContentful from "../../hooks/use-contentful";
import { Link } from "react-router-dom";
import { query } from "../../utils/contentful-query";
import { queryProps } from "../../utils/contentful-query-props";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";

const Products = (props: { location: { pathname: string } }) => {
  const pathnameGender = props.location.pathname.split("/")[2];
  const pathnameCategory = props.location.pathname.split("/")[3];
  const { products } = useContentful(query, null);

  const filterProductsByGender = products
    .filter((product: queryProps) => {
      return product.gender === pathnameGender || product.gender === "unisex";
    })
    .filter((product: queryProps) => {
      return product.category === pathnameCategory;
    });

  return (
    <>
      <Header location={props.location.pathname} />
      {!products ? (
        <Loading />
      ) : (
        <div className={styles.productsContainer}>
          {filterProductsByGender
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
      )}
    </>
  );
};

export default Products;
