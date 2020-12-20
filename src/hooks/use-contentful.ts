import { useState, useEffect } from "react";

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;
const graphqlURL = `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`;

function useContentful(query: string, slug: string | null) {  
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

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
          data.arcteryxCollection.items.filter((item: {slug: string}) => {
            return item.slug === slug && setProduct(item);
          });          
          ;
        } else {
          
          setProducts(data.arcteryxCollection.items);
        }
      })
      .catch((err) => console.error(err));
  }, [query, slug]);
  
  return { product, products };
}

export default useContentful;
