import Link from "next/link";
import React from "react";

function ArticleList() {
  return (
    <div>
      <h1>Article List</h1>
      <Link href={"/articles/1"}>
        <h2>Article 1</h2>
      </Link>
      <Link href={"/articles/2"}>
        <h2>Article 2</h2>
      </Link>
      <Link href={"/articles/3"}>
        <h2>Article 3</h2>
      </Link>
      <Link href={"/articles/4"}>
        <h2>Article 4</h2>
      </Link>
    </div>
  );
}

export default ArticleList;
