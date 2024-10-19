import React from "react";
import productsMethods from "../../services/products";

const ProductImageFragment = (props) => {
  return <img {...props} src={productsMethods.getImageUrl(props.produtoId)} />;
};

export default ProductImageFragment;
