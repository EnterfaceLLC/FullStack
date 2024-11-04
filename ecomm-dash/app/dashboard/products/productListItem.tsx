//* GLUESTACK//
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

//* NEXTJS//
import Link from "next/link";

//* PRODUCT LIST COMPONENT//
export default function ProductList({ product }: any) {
  return (
    <Link
      href={`/dashboard/products/${product.id}`}
      className="flex, flex-1 min-w-[300px]"
    >
      <Card className="p-5 rounded-lg flex-1">
        <Image
          source={{
            uri: product.image,
          }}
          className="mb-6 h-[240px] w-full rounded-md"
          alt={`${product.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.name}
        </Text>

        <Heading size="md" className="mb-4">
          ${product.price}
        </Heading>
      </Card>
    </Link>
  );
}
