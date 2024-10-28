//* REACT NATIVE//
import { Pressable } from "react-native";

//* EXPO ROUTER//
import { Link, Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

//*GLUESTACK//
import { Icon } from "@/components/ui/icon";

//* LUCIDE//
import { ShoppingCart, User } from "lucide-react-native";

//* TANSTACK//
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";
const queryClient = new QueryClient();

//* ROOT PROJECT LAYOUT//
export default function RootLayout() {
  const cartLength = useCart((state) => state.items.length);

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <Stack
          screenOptions={{
            headerRight: () =>
              cartLength > 0 && (
                <Link href={"/cart"} asChild>
                  <Pressable className="flex-row gap-2">
                    <Icon as={ShoppingCart} />
                    <Text>{cartLength}</Text>
                  </Pressable>
                </Link>
              ),
            headerLeft: () => (
              <Link href={"/login"} asChild>
                <Pressable className="flex-row gap-2">
                  <Icon as={User} />
                </Pressable>
              </Link>
            ),
          }}
        >
          <Stack.Screen name="index" options={{ title: "Shop" }} />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
