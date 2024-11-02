//* API FN//
import { listProducts } from "@/api/products";

//* COMPONENT//
import ProductList from "./productListItem";

//* NEXTJS//
import Link from "next/link";

//* GLUESTACK//
import { Card } from "@/components/ui/card";
import { AddIcon, Icon } from "@/components/ui/icon";

//* PRODUCTS PAGE//
export default async function ProductsPage() {
  const products = await listProducts();
  console.log("Server Connected", products);

  return (
    <div className="flex flex-row flex-wrap gap-4 max-w-[1200px] w-full mx-auto">
      <Link href={"/dashboard/products/create"}>
        <Card className="w-full h-full min-w-[300px] flex items-center justify-center bg-teal-900">
          <Icon as={AddIcon} className="w-10 h-10 color-slate-50" />
        </Card>
      </Link>
      {products.map((product: any) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
}
