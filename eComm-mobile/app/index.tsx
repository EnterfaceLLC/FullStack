//* REACT NATIVE//
import { FlatList, StyleSheet, Text, View } from "react-native";

//* MOCK DATA//
import products from "../assets/data/products.json";

//* COMPONENT//
import ProductList from "../components/productList";

//* HOME SCREEN//
export default function HomeScreen() {
  return (
    <FlatList
      data={products}
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
