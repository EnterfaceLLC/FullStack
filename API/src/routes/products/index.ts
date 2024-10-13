//* EXPRESS //
import { Router } from "express";

//* MIDDLEWARE //
import { validateData } from "../../middlewares/validationMiddleware";

//* PRODUCT CONTROLLERS //
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct,
} from "./prodController";

//* CREATE PROD SCHEMA DRIZZLE //
import { createProdSchema, updateProdSchema } from "../../db/productsSchema";

//* ROUTERS //
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);

router.post("/", validateData(createProdSchema), createProduct);

router.put("/:id", validateData(updateProdSchema), updateProduct);

router.delete("/:id", deleteProduct);

export default router;
