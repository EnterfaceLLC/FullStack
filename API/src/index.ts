//* EXPRESS //
import express, { json, urlencoded } from "express";

//* PRODUCT ROUTES //
import productRoutes from "./routes/products/index";

//* MAIN //
const port = 3000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("Hola Mi Mundo!");
});

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
