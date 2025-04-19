"use client";
import { Card } from "@/components/ui/card";
import Posts from "./Posts";

export default function StockNews({ slug }: { slug: string }) {
  return (
    <Card>
      <Posts name={slug} />
    </Card>
  );
}
