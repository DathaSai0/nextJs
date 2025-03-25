import { notFound } from "next/navigation";

const productReview = async ({ params }) => {
  const { reviewId, productId } = await params;

  if (Number(reviewId) >= 1000) {
    notFound();
  }
  return (
    <h1>
      review of product {productId} is review {reviewId}
    </h1>
  );
};
export default productReview;
