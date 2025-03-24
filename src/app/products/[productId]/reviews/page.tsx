import React from "react";

async function ReviewList({ params }) {
  const { productId } = await params;
  return <h1>review of {productId} </h1>;
}

export default ReviewList;
