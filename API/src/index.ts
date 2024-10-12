import express from "express";
import productRoutes from "./routes/products/index";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mi Mundo!");
});

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
