import React from "react";
import styles from "../RenderProduct/RenderProduct.module.scss";
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
  return (
    <div className={styles.productsContainer}>
      <p className={styles.title} data-testid="title">
        {product && product.title}
      </p>
      {documentToReactComponents(
        // @ts-ignore
        product && product.description.json,
        RICHTEXT_OPTIONS
      )}

      <p className={styles.price}>{`$${product && product.price}`}</p>
      {
        <img
          className={styles.productImage}
          src={productColor}
          alt={product && product.title}
        />
      }
      <p className={styles.selectColor}>{`Select a colour: ${color}`}</p>
      <div className={styles.thumbnailImagesWrapper}>{thumbnailImages}</div>
    </div>
  );
};

export default RenderProduct;
