import React, { useState, useEffect } from "react";
import styles from "../Products/products.module.scss";
import { Link } from "react-router-dom";

const query = `
query {
  arcteryxCollection {
    items {
      title
      slug
      description {
        json
      }
      price
      imagesCollection {
        items {
          url
          title
          description
        }
        }
      }
    }
  }
  `;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;
const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`;

const Products = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(graphqlURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setProduct(data.arcteryxCollection.items);
      })
      .catch((err) => console.error(err));
  }, []);

  // console.log(product);

  return (
    <div className={styles.productsContainer}>
      {product &&
        product.map((jacket, index) => {
          return (
            <Link to={`/product/${jacket.slug}`}>
              <div key={`jackets-${index}`}>
                <p className={styles.title}>{jacket.title}</p>
                <img
                  className={styles.jacketImage}
                  src={jacket.imagesCollection.items[0].url}
                  alt={jacket.title}
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Products;
