import React, { useEffect, useState } from "react";
import useContentful from "../../hooks/use-contentful";
import styles from "./Product.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Header from "../Header/Header";
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

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={styles.description}>{children}</p>;
    },
  },
};

const Product = (props) => {
  // Custom HOOK for fetching Contentful Data
  const { product } = useContentful(query, props.match.params.slug);
  const [jacketColor, setJacketColor] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(() => {
    setJacketColor(product && product.imagesCollection.items[1].url);
    setColor(product && product.imagesCollection.items[1].description);
  }, [product]);

  if (!product) return <span>LOADING...</span>;

  const changeColor = (jacketColor) => {
    const filterHero = product.imagesCollection.items
      .filter((heroJacket) => heroJacket.title.includes("hero"))
      .filter((item) => item.description === jacketColor);

    setJacketColor(filterHero[0].url);
    setColor(filterHero[0].description);
  };

  const thumbnailImages = product.imagesCollection.items
    .filter((jacket) => jacket.title.includes("thumbnail"))
    .map((jacket, index) => {
      return (
        <img
          className={styles.thumbnailImages}
          key={`products-${index}`}
          src={jacket.url}
          alt={product.title}
          onClick={() => changeColor(jacket.description)}
        />
      );
    });

  return (
    <>
      <Header />
      <div className={styles.productsContainer}>
        <p className={styles.title}>{product.title}</p>
        {documentToReactComponents(product.description.json, RICHTEXT_OPTIONS)}
        <p className={styles.price}>{`$${product.price}`}</p>
        {
          <img
            className={styles.productImage}
            src={jacketColor}
            alt={product.title}
          />
        }
        <p className={styles.selectColor}>{`Select a colour: ${color}`}</p>
        <div className={styles.thumbnailImagesWrapper}>{thumbnailImages}</div>
      </div>
    </>
  );
};

export default Product;
