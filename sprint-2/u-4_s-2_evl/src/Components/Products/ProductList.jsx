import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({Alldata}) => {
  return (
    <div data-testid="products-container">
      {Alldata?.map((item) => (
        <ProductItem {...item} key={item.id} id={item.id} />
      ))}
    </div>
  );
};

// export
export default ProductList;
