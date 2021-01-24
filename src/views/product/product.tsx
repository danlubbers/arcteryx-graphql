import React, { useEffect, useState } from "react";
import styles from "../product/product.module.scss";
import { RouteComponentProps } from "react-router-dom";
import useContentful from "../../hooks/use-contentful";
import { query } from "../../utils/contentful-query";
import { imagesCollectionProps } from "../../utils/contentful-query-props";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import RenderProduct from "../../Components/RenderProduct/RenderProduct";

interface SlugParams {
  slug: string;
}

const Product = ({ match }: RouteComponentProps<SlugParams>) => {
  // Custom HOOK for fetching Contentful Data
  const slug = match.params.slug;
  const { product } = useContentful(query, slug);

  const productObj = product[0];

  const [productColor, setProductColor] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    setProductColor(productObj && productObj.imagesCollection.items[0].url);
    setColor(productObj && productObj.imagesCollection.items[0].description);
  }, [productObj]);

  const changeColor = (productColor: string) => {
    const filteredHero = productObj.imagesCollection.items
      .filter((heroProduct: { title: string }) =>
        heroProduct.title.includes("hero")
      )
      .filter(
        (item: { description: string }) => item.description === productColor
      );

    setProductColor(filteredHero[0].url);
    setColor(filteredHero[0].description);
  };

  const thumbnailImages =
    productObj &&
    productObj.imagesCollection.items
      .filter((product: imagesCollectionProps) => {
        return product.title.includes("thumbnail");
      })
      .map((product: imagesCollectionProps, index: number) => {
        return (
          <img
            className={styles.thumbnailImages}
            key={`products-${index}`}
            src={product.url}
            alt={productObj.title}
            onClick={() => changeColor(product.description)}
          />
        );
      });

  if (!product) return null;
  return (
    <>
      <Header />
      {!product ? (
        <Loading hasProduct={true} />
      ) : (
        <RenderProduct
          product={productObj}
          productColor={productColor}
          color={color}
          thumbnailImages={thumbnailImages}
        />
      )}
    </>
  );
};

export default Product;
