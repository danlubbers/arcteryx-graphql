import React, { useEffect, useState } from "react";
import useContentful from "../../hooks/use-contentful";
import styles from "./Product.module.scss";
import { query } from "../../utils/contentful-query";
import { queryProps } from "../../utils/contentful-query-props";
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

const Product = (props: any) => {
  // Custom HOOK for fetching Contentful Data
  const slug = props.match.params.slug;
  const { product } = useContentful(query, slug);
  console.log(product);
  const [jacketColor, setJacketColor] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(() => {
    setJacketColor(
      // @ts-ignore
      product.imagesCollection && product.imagesCollection.items[1].url
    );
    setColor(
      // @ts-ignore
      product.imagesCollection && product.imagesCollection.items[1].description
    );
  }, [product]);

  const changeColor = (jacketColor: string) => {
    // @ts-ignore
    const filterHero = product.imagesCollection.items
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
      // @ts-ignore
      product.imagesCollection &&
      // @ts-ignore
      product.imagesCollection.items
        .filter((jacket: queryProps) => jacket.title.includes("thumbnail"))
        .map((jacket: { url: string; description: string }, index: number) => {
          return (
            <img
              className={styles.thumbnailImages}
              key={`products-${index}`}
              src={jacket.url}
              // @ts-ignore
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
          {/*  @ts-ignore */}
          <p className={styles.title}>{product && product.title}</p>
          {documentToReactComponents(
            // @ts-ignore
            product.description && product.description.json,
            RICHTEXT_OPTIONS
          )}
          {/*  @ts-ignore */}
          <p className={styles.price}>{`$${product && product.price}`}</p>
          {
            <img
              className={styles.productImage}
              //  @ts-ignore
              src={jacketColor}
              //  @ts-ignore
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
