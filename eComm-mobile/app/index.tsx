//* REACT NATIVE//
import { FlatList, StyleSheet } from "react-native";

//* MOCK DATA//
import products from "../assets/data/products.json";

//* COMPONENT//
import ProductList from "../components/productList";

//* HOME SCREEN//
export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2"
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
