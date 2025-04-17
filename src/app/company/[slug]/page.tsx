import { use } from "react";

export default function CategoryDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <div>Category ID: {id}</div>;
}
