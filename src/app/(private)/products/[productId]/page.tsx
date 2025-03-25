import React from "react";

async function ProductDetalis({ params }) {
  const { productId } = await params;

  console.log(productId);
  return <h1>Details about product {productId}</h1>;
}

export default ProductDetalis;
