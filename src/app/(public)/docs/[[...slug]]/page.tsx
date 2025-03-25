async function page({ params }) {
  const { slug } = await params;

  if (slug?.length === 1) {
    return <h1> docs of feature {slug[0]}</h1>;
  }
  if (slug?.length === 2) {
    return (
      <h1>
        docs of feature {slug[0]} and concept of {slug[1]}
      </h1>
    );
  }
  return <h1>docs page</h1>;
}

export default page;

//here if you want navigate the default page docs to docs page then use two square brackets
