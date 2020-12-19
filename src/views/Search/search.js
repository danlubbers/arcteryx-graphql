import React, { useState } from "react";
import styles from "../Search/search.module.scss";
import useContentful from "../../hooks/use-contentful";
import { query } from "../../utils/contentful-query";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";

const Search = () => {
  const { product } = useContentful(query);
  const [productsFound, setProductsFound] = useState(false);
  const [renderProducts, setRenderProducts] = useState([]);

  const handleSearch = (searchValues) => {
    let filterProducts = [];

    searchValues.length > 0 ? setProductsFound(true) : setProductsFound(false);

    return (
      product &&
      product.filter((product) => {
        setRenderProducts(filterProducts);
        return (
          searchValues
            .split(" ")
            .every((word) =>
              product.title.toLowerCase().includes(word.toLowerCase())
            ) && filterProducts.push(product)
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
        <div className={styles.searchContainer}>
          <p>search</p>
          <input
            className={styles.searchInput}
            type="search"
            name="search"
            placeholder="search for products"
            onChange={(e) => handleSearch(e.target.value)}
          />

          {productsFound && <p>{renderProducts.length} products found!</p>}
          {productsFound &&
            renderProducts.map((product, index) => {
              return (
                <div
                  className={styles.productsWrapper}
                  key={`product-${index}`}
                >
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.title}</p>
                    <img
                      className={styles.productImage}
                      src={product.imagesCollection.items[0].url}
                      alt={product.title}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Search;
