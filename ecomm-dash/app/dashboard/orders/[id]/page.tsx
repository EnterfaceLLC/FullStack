//* API FN//
import { fetchOrder } from "@/api/orders";

//* GLUESTACK//
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";

//* DAYJS//
import dayjs from "dayjs";

//* SELECTOR COMPONENT//
import Selector from "./statusSelect";
import { Box } from "@/components/ui/box";

//* ORDER ID PAGE//
export default async function OrdersPage({
  params,
}: {
  params: { id: string };
}) {
  const order = await fetchOrder(Number(params.id));
  console.log("ORDER ID:", order);
  return (
    <Card>
      <Box className="p-4 gap-4 border-b border-gray-200">
        <Text className="font-bold">Order #{order?.id}</Text>

        <Text>{dayjs(order?.createdAt).format("DD/MM/YYYY HH:mm")}</Text>
        <Box className="w-48">
          <Selector status={order?.status} id={order?.id} />
        </Box>
      </Box>

      <Heading className="mt-5 text-gray-500">Items</Heading>
      {order?.items.map((orderitem: any) => (
        <HStack key={orderitem.id} className="p-4 gap-4">
          <Text>{orderitem.productId}</Text>
          <Text>
            {orderitem.quantity} x ${orderitem.price}
          </Text>
        </HStack>
      ))}
    </Card>
  );
}
