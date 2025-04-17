// src/app/company/[slug]/page.tsx (or wherever your route is)

import StockPageClient from "@/components/StockPageClient";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  return <StockPageClient slug={params.slug} />;
}
