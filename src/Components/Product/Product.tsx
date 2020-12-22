import React, { useEffect, useState } from "react";
import useContentful from "../../hooks/use-contentful";
import styles from "./Product.module.scss";
import { query } from "../../utils/contentful-query";
import { imagesCollectionProps } from "../../utils/contentful-query-props";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p className={styles.description}>{children}</p>;
    },
  },
};

const Product = (props: { match: { params: { slug: string } } }) => {
  // Custom HOOK for fetching Contentful Data
  const slug = props.match.params.slug;
  const { product } = useContentful(query, slug);

  const [jacketColor, setJacketColor] = useState("");
  const [color, setColor] = useState("");
  useEffect(() => {
    setJacketColor(product[0] && product[0].imagesCollection.items[1].url);
    setColor(product[0] && product[0].imagesCollection.items[1].description);
  }, [product]);

  const changeColor = (jacketColor: string) => {
    const filterHero = product[0].imagesCollection.items
      .filter((heroJacket: { title: string }) =>
        heroJacket.title.includes("hero")
      )
      .filter(
        (item: { description: string }) => item.description === jacketColor
      );

    setJacketColor(filterHero[0].url);
    setColor(filterHero[0].description);
  };

  const thumbnailImages = () => {
    return (
      product[0] &&
      product[0].imagesCollection.items
        .filter((jacket: imagesCollectionProps) => {
          return jacket.title.includes("thumbnail");
        })
        .map((jacket: imagesCollectionProps, index: number) => {
          return (
            <img
              className={styles.thumbnailImages}
              key={`products-${index}`}
              src={jacket.url}
              alt={product[0].title}
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
          <p className={styles.title}>{product[0] && product[0].title}</p>
          {documentToReactComponents(
            // @ts-ignore
            product.description && product[0].description.json,
            RICHTEXT_OPTIONS
          )}

          <p className={styles.price}>{`$${product[0] && product[0].price}`}</p>
          {
            <img
              className={styles.productImage}
              src={jacketColor}
              alt={product[0] && product[0].title}
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
