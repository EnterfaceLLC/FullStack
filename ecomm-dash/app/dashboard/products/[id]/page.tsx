import { fetchProductById } from "@/api/products";
import ProductList from "../productListItem";

export default async function ProductDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  const product = await fetchProductById(Number(id));

  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <ProductList product={product} />
    </div>
  );
}
