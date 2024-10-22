//* REACT NATIVE//
import { FlatList, StyleSheet } from "react-native";

//* GLUESTACK//
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";

//* MOCK DATA//
import products from "../assets/data/products.json";

//* COMPONENT//
import ProductList from "../components/productList";

//* HOME SCREEN//
export default function HomeScreen() {
  const numCols = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  return (
    <FlatList
      key={numCols}
      data={products}
      numColumns={numCols}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2 max-w-[960px] mx-auto w-full"
      renderItem={({ item }) => <ProductList product={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
