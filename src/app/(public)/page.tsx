import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Hello from Home component</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </>
  );
};
export default Home;
