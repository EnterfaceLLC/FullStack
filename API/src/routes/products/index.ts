//* EXPRESS //
import { Router } from "express";

//* PRODUCT CONTROLLERS //
import {
  createProduct,
  deleteProduct,
  getProductById,
  listProducts,
  updateProduct,
} from "./prodController";

//* ROUTERS //
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
