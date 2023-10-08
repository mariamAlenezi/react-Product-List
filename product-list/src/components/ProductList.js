import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productsList = products.map((cake) => {
    return <ProductItem cake={cake} />;
  });
  return <div className="card">{productsList}</div>;
};

export default ProductList;
