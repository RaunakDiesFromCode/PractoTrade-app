import StockPageClient from "@/components/StockPageClient";

export default function CompanyPage({ params }: { params: { slug: string } }) {
  return <StockPageClient slug={params.slug} />;
}
