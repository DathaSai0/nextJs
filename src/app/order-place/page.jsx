"use client";

import { useRouter, redirect } from "next/navigation";

function PlaceOrder() {
  const router = useRouter();

  const onPlaceOrder = () => {
    alert("Placing an order");
    router.push("/");

    //redirect is  also used to redirect the to the another page
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={onPlaceOrder}>Place Order</button>
    </>
  );
}

export default PlaceOrder;
