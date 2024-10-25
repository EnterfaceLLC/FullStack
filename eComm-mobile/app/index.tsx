//* REACT//
// import { useEffect, useState } from "react";

//* REACT NATIVE//
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

//* GLUESTACK//
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { Text } from "@/components/ui/text";

//* TANSTACK QUERY//
import { useQuery } from "@tanstack/react-query";

//* MOCK DATA//
// import products from "../assets/data/products.json";

//* COMPONENT//
import ProductList from "../components/productList";

//* API//
import { listProducts } from "@/api/products";

//* HOME SCREEN//
export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });

  // const [products, setProducts] = useState();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const data = await listProducts();
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  const numCols = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Fetching Error!</Text>;
  }

  return (
    <FlatList
      key={numCols}
      data={data}
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
