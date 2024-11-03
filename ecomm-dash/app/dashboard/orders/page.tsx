//* API FN//
import { fetchOrders } from "@/api/orders";

//* GLUESTACK//
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import dayjs from "dayjs";

//* ORDERS PAGE//
export default async function OrdersPage(params: any) {
  const orders = await fetchOrders();

  console.log("ORDERS:", orders);
  return (
    <Card className="w-full max-w-screen-lg">
      <HStack className="p-4 border-b border-gray-200 gap-4">
        <Text className="font-bold">Id</Text>
        <Text className="font-bold">Date</Text>
        <Text className="ml-auto font-bold">Status</Text>
      </HStack>

      //! REPLACE THIS HARD CODED DATA//
      <HStack className="p-4 border-b border-gray-200 gap-4">
        <Text>5</Text>
        <Text>
          {dayjs("2024-11-02T11:42:17.215Z").format("DD/MM/YYYY HH:mm")}
        </Text>
        <Text className="ml-auto">NEW</Text>
      </HStack>

      //! ACTIVATE ONCE ORDERS EXIST IN DB!//
      {/* {orders.map((order) => (
        <HStack key={order.id} className="p-4 border-b border-gray-200 gap-4">
          <Text>{order.id}</Text>
          <Text>{dayjs(order.createdAt).format("DD/MM/YYY HH:mm")}</Text>
          <Text className="ml-auto">{order.status}</Text>
        </HStack>
      ))} */}
    </Card>
  );
}
