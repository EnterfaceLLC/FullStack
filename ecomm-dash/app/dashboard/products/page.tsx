//* API FN//
import { listProducts } from "@/api/products";

//* COMPONENT//
import ProductList from "./productListItem";

//* PRODUCTS PAGE//
export default async function ProductsPage() {
  const products = await listProducts();
  console.log("Server Connected", products);

  return (
    <div className="flex flex-row flex-wrap gap-4 max-w-[1200px] w-full mx-auto">
      {products.map((product: any) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
}
