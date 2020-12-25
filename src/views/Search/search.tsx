import React, { useState } from "react";
import styles from "../Search/search.module.scss";
import useContentful from "../../hooks/use-contentful";
import { query } from "../../utils/contentful-query";
import { queryProps } from "../../utils/contentful-query-props";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import RenderProducts from "../../Components/RenderProducts/RenderProducts";

const Search = () => {
  const { products } = useContentful(query, null);
  const [productsFound, setProductsFound] = useState(false);
  const [renderProducts, setRenderProducts] = useState([]);

  const handleSearch = (searchValues: string) => {
    let filterProducts: any = [];

    searchValues.length > 0 ? setProductsFound(true) : setProductsFound(false);

    return products.filter((product: queryProps) => {
      setRenderProducts(filterProducts);

      // Regex Search for exact match. EX. "mens" found mens, not womens
      return (
        searchValues.split(" ").every((word) => {
          const regex = new RegExp(`\\b${word}\\b`, "i");
          const productTitle = product.title.replace("'", "").toLowerCase();
          return productTitle.match(regex);
        }) && filterProducts.push(product)
      );

      /* 
        Non-regex Search - does not account for substrings. EX. "mens" also retrives womens products
      */
      // return (
      //   searchValues.split(" ").every((word) => {
      //     return product.title
      //       .replace("'", "")
      //       .toLowerCase()
      //       .includes(word.toLowerCase());
      //   }) && filterProducts.push(product)
      // );
    });
  };

  return (
    <>
      <Header />
      {!products ? (
        <Loading />
      ) : (
        <div className={styles.searchContainer}>
          <p>Search for Products</p>

          <input
            className={styles.searchInput}
            type="search"
            name="search"
            placeholder="Ex. Jacket SV"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              handleSearch(e.currentTarget.value)
            }
          />

          {productsFound && <p>{renderProducts.length} products found!</p>}
          {productsFound && <RenderProducts renderProducts={renderProducts} />}
        </div>
      )}
    </>
  );
};

export default Search;
