//* EXPRESS //
import express, { json, urlencoded } from "express";

//* SERVERLESS //
import serverless from "serverless-http";

//* PRODUCT ROUTES //
import productRoutes from "./routes/products/index.js";

//* AUTH ROUTES //
import authRoutes from "./routes/auth/index.js";

//* ORDER ROUTES //
import orderRoutes from "./routes/orders/index.js";

//* MAIN //
const port = 3000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("Hola Mi Mundo!");
});

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);

if (process.env.NODE_ENV === "dev") {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export const handler = serverless(app);
