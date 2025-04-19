"use client";
import Posts from "./Posts";

export default function StockNews({ slug }: { slug: string }) {
  return (
      <Posts name={slug} />
  );
}
