"use client";
import Link from "next/link";
import { use } from "react";

function Article({ params, searchParams }) {
  const { articleId } = use(params);
  const { lang = "English" } = use(searchParams);
  return (
    <div>
      <h1>Article {articleId}</h1>

      <p> You are reading the article in Language {lang}</p>
      <Link href={`/articles/${articleId}?lang=${"English"}`}>English</Link>
      <Link href={`/articles/${articleId}?lang=${"Telugu"}`}>Telugu</Link>
      <Link href={`/articles/${articleId}?lang=${"Hindi"}`}>Hindi</Link>
    </div>
  );
}

export default Article;

// use the   use hook for getting the params and search params in client components
