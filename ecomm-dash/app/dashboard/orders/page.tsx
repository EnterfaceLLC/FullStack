//* API FN//
import { fetchOrders } from "@/api/orders";

//* GLUESTACK//
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";

//* DAYJS//
import dayjs from "dayjs";
import Link from "next/link";

//* ORDERS PAGE//
export default async function OrdersPage() {
  const orders = await fetchOrders();

  console.log("ORDERS:", orders);
  return (
    <Card className="w-full max-w-screen-lg">
      <HStack className="p-4 border-b border-gray-200 gap-8">
        <Text className="font-bold">Id</Text>
        <Text className="font-bold">Date</Text>
        <Text className="ml-auto font-bold">Status</Text>
      </HStack>

      {orders.map((order: any) => (
        <Link href={`/dashboard/orders/${order.id}`} key={order.id}>
          <HStack className="p-4 border-b border-gray-200 gap-8">
            <Text>{order.id}</Text>
            <Text>{dayjs(order.createdAt).format("DD/MM/YYYY HH:mm")}</Text>
            <Text className="ml-auto">{order.status}</Text>
          </HStack>
        </Link>
      ))}
    </Card>
  );
}
