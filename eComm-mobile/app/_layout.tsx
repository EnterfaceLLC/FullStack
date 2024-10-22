//* EXPO ROUTER//
import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

//* ROOT PROJECT LAYOUT//
export default function RootLayout() {
  return <GluestackUIProvider mode="light"><Stack /></GluestackUIProvider>;
}
