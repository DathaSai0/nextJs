export const metadata = {
  title: {
    absolute: "blog", // does not matter what is there in the parent it will give the blog title only..
  },
};

async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hlooo");
    }, 3000);
  });
  return <h1>Blog</h1>;
}

export default Blog;
