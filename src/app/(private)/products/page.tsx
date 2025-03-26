import Link from "next/link";

function ProductList() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>Product Lists</h1>
      <h1>
        <Link href={"/products/1"}>product 1</Link>
      </h1>
      <h1>
        <Link href={"/products/2"}>product 2</Link>
      </h1>
      <h1>
        <Link href={"/products/3"} replace>
          product 3
        </Link>
      </h1>
      <h1>
        <Link href={"/products/4"}>product 4</Link>
      </h1>
    </>
  );
}

export default ProductList;
