// src/app/company/[slug]/page.tsx

import StockPageClient from "@/components/StockPageClient";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  return <StockPageClient slug={params.slug} />;
}
