import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      <h1>{props.cake.image}</h1>
      <h4>{props.cake.name}</h4>
      <h6>{props.cake.price}</h6>
    </div>
  );
};

export default ProductItem;
