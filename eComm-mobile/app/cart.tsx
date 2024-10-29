//* REACT NATIVE//
import { FlatList } from "react-native";

//* EXPO ROUTER//
import { Redirect } from "expo-router";

//* ZUSTAND//
import { useCart } from "@/store/cartStore";
import { createOrder } from "@/api/orders";

//* TANSTACK//
import { useMutation } from "@tanstack/react-query";

//* GLUESTACK//
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";

export default function CartScreen() {
  const items = useCart((state) => state.items);
  const reset = useCart((state) => state.resetCart);

  console.log(items);

  const createOrderMutation = useMutation({
    mutationFn: () =>
      createOrder(
        items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
        }))
      ),

    onSuccess: (data) => {
      console.log("Order Success!", data);
      reset();
    },

    onError: (error) => console.log("Error:", error),
  });

  const onCheckout = async () => {
    //* Send Order to Server//
    createOrderMutation.mutate();
  };

  if (items.length === 0) {
    return <Redirect href={"/"} />;
  }

  return (
    <FlatList
      data={items}
      contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto"
      renderItem={({ item }) => (
        <HStack className="bg-white p-3">
          <VStack space="sm">
            <Text>{item.product.name}</Text>
            <Text>${item.product.price}</Text>
          </VStack>
          <Text className="ml-auto">qty:{item.quantity}</Text>
        </HStack>
      )}
      ListFooterComponent={() => (
        <Button onPress={onCheckout}>
          <ButtonText>Checkout</ButtonText>
        </Button>
      )}
    />
  );
}
