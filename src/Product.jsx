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
            description
          }
        }
      }
    }
}`;

const Product = () => {
  const [product, setProduct] = useState(null);
  const [jacketColor, setJacketColor] = useState(
    "https://images.ctfassets.net/bzodp6cmm4r2/67IpiChSavuaVQQhPAUkwx/c26a90f769834c1258392c38bec73e6b/Alpha-SV-Jacket-Glade.png"
  );
  const [color, setColor] = useState("Glade");

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

  const changeColor = (thumbnailIndex) => {
    let filterJacket = product.imagesCollection.items.filter(
      (jacket, index) => {
        return thumbnailIndex === index;
      }
    );
    setJacketColor(filterJacket[0].url);
    setColor(filterJacket[0].description);
  };

  return (
    <div className={styles.productsContainer}>
      <p className={styles.title}>{product && product.title}</p>
      <p className={styles.description}>{product && product.description}</p>
      <p className={styles.price}>{product && `$${product.price}`}</p>
      {product && (
        <img className={styles.productImage} src={jacketColor} alt="" />
      )}
      <p>{`Select a colour: ${color}`}</p>
      <div className={styles.productImagesWrapper}>
        {product &&
          product.imagesCollection.items.map((jacket, index) => {
            return (
              <img
                className={styles.productImages}
                key={`products-${index}`}
                src={jacket.url}
                alt={product.title}
                onClick={() => changeColor(index)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Product;
