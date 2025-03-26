"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

function error({ error, reset }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h1>An error occurred</h1>
      <p>{error.message}</p>
      <button onClick={reload}>Reload</button>
    </div>
  );
}

export default error;
