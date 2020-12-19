import React from "react";
import styles from "../Products/products.module.scss";
import useContentful from "../../hooks/use-contentful";
import { Link } from "react-router-dom";
import { query } from "../../utils/contentful-query";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";

interface jacketProps {
  title: string;
  slug: string;
  price: number;
  description: {
    json: {
      content: {
        value: string;
      }[];
    };
  };
  imagesCollection: {
    items: {
      url: string;
      title: string;
      description: string;
    }[];
  };
}

const Products = () => {
  const { product } = useContentful(query, null);

  return (
    <>
      <Header />
      {!product ? (
        <Loading />
      ) : (
        <div className={styles.productsContainer}>
          {product &&
            product.map((jacket: jacketProps, index: number) => {
              console.log(jacket);

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
