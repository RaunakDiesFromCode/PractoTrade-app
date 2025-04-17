import StockPageClient from "@/components/StockPageClient";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  return <StockPageClient slug={params.slug} />;
}
