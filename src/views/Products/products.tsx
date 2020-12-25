import React from "react";
import useContentful from "../../hooks/use-contentful";
import { query } from "../../utils/contentful-query";
import { queryProps } from "../../utils/contentful-query-props";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import RenderProducts from "../../Components/RenderProducts/RenderProducts";

const Products = (props: { location: { pathname: string } }) => {
  const pathnameGender = props.location.pathname.split("/")[2];
  const pathnameCategory = props.location.pathname.split("/")[3];
  const { products } = useContentful(query, null);

  const filteredProducts = products
    .filter((product: queryProps) => {
      return product.gender === pathnameGender || product.gender === "unisex";
    })
    .filter((product: queryProps) => {
      return product.category === pathnameCategory;
    });

  return (
    <>
      <Header location={props.location.pathname} />
      {!products ? (
        <Loading />
      ) : (
        <RenderProducts renderProducts={filteredProducts} />
      )}
    </>
  );
};

export default Products;
