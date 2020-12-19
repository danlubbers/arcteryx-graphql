import { useState, useEffect } from "react";

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;
const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`;

function useContentful(query, slug) {
  const [product, setProduct] = useState([]);

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
        if (slug) {
          const slugProduct = data.arcteryxCollection.items.filter((item) => {
            return item.slug === slug && item;
          });
          setProduct(slugProduct[0]);
        } else {
          setProduct(data.arcteryxCollection.items);
        }
      })
      .catch((err) => console.error(err));
  }, [query, slug]);
  return { product };
}

export default useContentful;
