import React, { useEffect, useState } from "react";
import useContentful from "../../hooks/use-contentful";
import styles from "./Product.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const query = ` 
query {
  arcteryxCollection {
    items {
      title
      description {
        json
      }
      price
      imagesCollection {
        items {
          url
          description
        }
      }
    }
  }
}
`;

const Product = () => {
  // Custom HOOK for fetching Contentful Data
  const { product } = useContentful(query);
  const [jacketColor, setJacketColor] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    setJacketColor(product && product.imagesCollection.items[1].url);
    setColor(product && product.imagesCollection.items[1].description);
  }, [product]);

  if (!product) return <span>LOADING...</span>;

  const changeColor = (thumbnailIndex) => {
    let filterJacket = product.imagesCollection.items.filter((_, index) => {
      return thumbnailIndex === index;
    });
    setJacketColor(filterJacket[0].url);
    setColor(filterJacket[0].description);
  };

  return (
    <div className={styles.productsContainer}>
      <p className={styles.title}>{product.title}</p>
      <p className={styles.description}>
        {documentToReactComponents(product.description.json)}
      </p>
      <p className={styles.price}>{`$${product.price}`}</p>
      {
        <img
          className={styles.productImage}
          src={jacketColor}
          alt={product.title}
        />
      }
      <p className={styles.selectColor}>{`Select a colour: ${color}`}</p>
      <div className={styles.productImagesWrapper}>
        {product.imagesCollection.items.map((jacket, index) => {
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
