//* EXPO ROUTER//
import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

//* TANSTACK//
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

//* ROOT PROJECT LAYOUT//
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <Stack>
          <Stack.Screen name="index" options={{ title: "Shop" }} />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
