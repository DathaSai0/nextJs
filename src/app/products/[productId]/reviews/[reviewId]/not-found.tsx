"use client";
import { usePathname } from "next/navigation";

function notFound() {
  const pathName = usePathname();
  const productId = pathName?.split("/")?.[2];
  const reviewId = pathName?.split("/")?.[4];
  return (
    <div>
      <h1>
        {reviewId} review not-found for product of {productId}
      </h1>
    </div>
  );
}

export default notFound;
