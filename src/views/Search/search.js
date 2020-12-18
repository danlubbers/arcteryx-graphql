import React, { useState, useEffect } from "react";
import styles from "../Search/search.module.scss";
import Header from "../../Components/Header/Header";

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

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;
const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`;

const Search = () => {
  const [products, setProducts] = useState(null);
  const [productsFound, setProductsFound] = useState(false);
  const [renderProducts, setRenderProducts] = useState([]);

  useEffect(() => {
    fetch(graphqlURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setProducts(data.arcteryxCollection.items);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (searchValue) => {
    let filterProducts = [];

    searchValue.length > 0 ? setProductsFound(true) : setProductsFound(false);

    return (
      products &&
      products.filter((product) => {
        setRenderProducts(filterProducts);
        return (
          product.title.toLowerCase().includes(searchValue) &&
          filterProducts.push(product)
        );
      })
    );
  };

  return (
    <>
      <Header />
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
            console.log(product);
            return (
              <div className={styles.productsWrapper} key={`product-${index}`}>
                <p>{product.title}</p>
                <img
                  className={styles.productImage}
                  src={product.imagesCollection.items[0].url}
                  alt={product.title}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Search;
