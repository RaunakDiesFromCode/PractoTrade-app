// app/[slug]/page.tsx

import StockPageClient from "@/components/StockPageClient";


export default function Page({ params }: { params: { slug: string } }) {
  return <StockPageClient slug={params.slug} />;
}
