import React, { Fragment, useState } from "react";

import ProductItem from "./ProductItem";

function Product({ products, title }) {
  console.log(title);
  return (
    <div className="mx-auto my-0 max-w-[1200px] px-[15px] py-0">
      <div className="grid grid-cols-6 gap-4">
        {products?.map((item) => {
          return <ProductItem key={item.id} item={item} title={title} />;
        })}
      </div>
    </div>
  );
}

export default Product;
