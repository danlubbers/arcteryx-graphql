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
      return product.gender === pathnameGender;
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
          {filterProductsByGender.map((jacket: queryProps, index: number) => {
            return (
              <div key={`jackets-${index}`}>
                <Link to={`/product/${jacket.slug}`}>
                  <p className={styles.title}>{jacket.title}</p>
                  <img
                    className={styles.jacketImage}
                    src={jacket.imagesCollection.items[0].url}
                    alt={jacket.title}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
