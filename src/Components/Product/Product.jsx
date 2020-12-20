import React, { useEffect, useState } from "react";
import useContentful from "../../hooks/use-contentful";
import styles from "./Product.module.scss";
import { query } from "../../utils/contentful-query";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className={styles.description}>{children}</p>;
    },
  },
};

const Product = (props) => {
  // Custom HOOK for fetching Contentful Data
  const slug = props.match.params.slug;
  const { product } = useContentful(query, slug);
  console.log(product);
  const [jacketColor, setJacketColor] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(() => {
    setJacketColor(
      product.imagesCollection && product.imagesCollection.items[1].url
    );
    setColor(
      product.imagesCollection && product.imagesCollection.items[1].description
    );
  }, [product]);

  const changeColor = (jacketColor) => {
    const filterHero = product.imagesCollection.items
      .filter((heroJacket) => heroJacket.title.includes("hero"))
      .filter((item) => item.description === jacketColor);

    setJacketColor(filterHero[0].url);
    setColor(filterHero[0].description);
  };

  const thumbnailImages = () => {
    return (
      product.imagesCollection &&
      product.imagesCollection.items
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
        })
    );
  };

  return (
    <>
      <Header />
      {!product ? (
        <Loading />
      ) : (
        <div className={styles.productsContainer}>
          <p className={styles.title}>{product && product.title}</p>
          {documentToReactComponents(
            product.description && product.description.json,
            RICHTEXT_OPTIONS
          )}
          <p className={styles.price}>{`$${product && product.price}`}</p>
          {
            <img
              className={styles.productImage}
              src={jacketColor}
              alt={product && product.title}
            />
          }
          <p className={styles.selectColor}>{`Select a colour: ${color}`}</p>
          <div className={styles.thumbnailImagesWrapper}>
            {thumbnailImages()}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
