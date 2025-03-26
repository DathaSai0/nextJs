import React from "react";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { productId } = await params;
  return {
    title: `Product Details - ${productId}`,
  };
};
async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  // an example for error handling in error file
  // const getRandomNumber = () => {
  //   return Math.round(Math.random());
  // };

  // if (getRandomNumber() === 1) {
  //   throw new Error("simply error");
  // }

  console.log(productId);
  return <h1>Details about product {productId}</h1>;
}

export default ProductDetails;
