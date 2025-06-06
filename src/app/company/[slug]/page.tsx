// src/app/company/[slug]/page.tsx

import StockPageClient from "@/components/StockPageClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <div className="min-h-screen">
    <StockPageClient slug={slug} />
  </div>;
}
