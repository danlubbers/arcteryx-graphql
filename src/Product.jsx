import React, { useState, useEffect } from "react";
import styles from "./Product.module.scss";

const query = `
  query {
    arcteryxCollection{
      items{
        title
        description
        price
        imagesCollection {
          items {
            url
          }
        }
      }
    }
}`;

const Product = () => {
  const [product, setProduct] = useState(null);

  const spaceID = process.env.REACT_APP_SPACE_ID;
  const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${spaceID}/`;
  const ContentfulAPI = process.env.REACT_APP_CONTENT_DELIVERY_API;

  useEffect(() => {
    fetch(graphqlURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ContentfulAPI}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then(({ data, errors }) => {
        console.log(data);
        setProduct(data.arcteryxCollection.items[0]);
      });
  }, []);

  return (
    <div className={styles.productsContainer}>
      <p className={styles.title}>{product && product.title}</p>
      <p className={styles.description}>{product && product.description}</p>
      <p className={styles.price}>{product && `$${product.price}`}</p>
      {product && (
        <img
          className={styles.productImage}
          src={product.imagesCollection.items[1].url}
          alt=""
        />
      )}
      <div className={styles.productImagesWrapper}>
        {product &&
          product.imagesCollection.items.map((jacket, index) => {
            return (
              <img
                className={styles.productImages}
                key={`products-${index}`}
                src={jacket.url}
                alt={product.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Product;
