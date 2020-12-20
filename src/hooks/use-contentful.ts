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
        console.log(data);      
        if (slug) {
          const slugProduct = data.arcteryxCollection.items.filter((item: {slug: string}) => {
            return item.slug === slug && item;
          });
          console.log(slugProduct[0]);
          
          setProduct(slugProduct[0]);
        } else {
          console.log(data.arcteryxCollection.items);
          
          setProducts(data.arcteryxCollection.items);
        }
      })
      .catch((err) => console.error(err));
  }, [query, slug]);
  console.log(product);
  console.log(products);
  
  return { product, products };
}

export default useContentful;
