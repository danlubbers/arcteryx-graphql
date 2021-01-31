import React, { useState } from "react";
import styles from "../RenderProduct/RenderProduct.module.scss";
import FullscreenImage from "../FullscreenImage/FullscreenImage";
import { queryProps } from "../../utils/contentful-query-props";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return <p className={styles.description}>{children}</p>;
    },
  },
};

interface RenderProductProps {
  product: queryProps;
  productColor: string;
  color: string;
  thumbnailImages: any;
}

const RenderProduct: React.FC<RenderProductProps> = ({
  product,
  productColor,
  color,
  thumbnailImages,
}) => {
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  return (
    <>
      <div className={styles.productsContainer}>
        <p className={styles.title} data-testid="title">
          {product && product.title}
        </p>
        {documentToReactComponents(
          // @ts-ignore
          product && product.description.json,
          RICHTEXT_OPTIONS
        )}

        <p className={styles.price} data-testid="price">{`$${
          product && product.price
        }`}</p>
        {
          <img
            className={styles.productImage}
            src={productColor}
            alt={product && product.title}
            data-testid="image"
            onClick={() => setShowFullscreenImage(!showFullscreenImage)}
          />
        }
        <p className={styles.selectColor}>{`Select a colour: ${color}`}</p>
        <div className={styles.thumbnailImagesWrapper}>{thumbnailImages}</div>
      </div>
      {showFullscreenImage && (
        <FullscreenImage
          setShowFullscreen={setShowFullscreenImage}
          productImage={productColor}
          productTitle={product.title}
        />
      )}
    </>
  );
};

export default RenderProduct;
