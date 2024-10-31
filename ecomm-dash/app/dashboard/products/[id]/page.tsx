//* API FN//
import { fetchProductById } from "@/api/products";

//* COMPONENT//
import ProductList from "../productListItem";

//* PRODUCT DETAILS PAGE//
export default async function ProductDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  const product = await fetchProductById(Number(id));

  return (
    <div className="max-w-screen-lg w-full mx-auto">
      <ProductList product={product} />
    </div>
  );
}
