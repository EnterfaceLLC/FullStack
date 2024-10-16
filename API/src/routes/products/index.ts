//* EXPRESS //
import { Router } from "express";

//* MIDDLEWARE //
import { validateData } from "../../middlewares/validationMiddleware";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware";

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

router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProdSchema),
  createProduct
);

router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProdSchema),
  updateProduct
);

router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;
