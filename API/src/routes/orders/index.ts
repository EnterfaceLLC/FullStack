//* EXPRESS //
import { Router } from "express";

//* MIDDLEWARE //
import { validateData } from "../../middlewares/validationMiddleware.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";

//* DATABASE //
import { db } from "../../db/index.js";

//* ORDER CONTROLLERS //
import {
  createOrder,
  getOrder,
  listOrders,
  updateOrder,
} from "./orderController.js";

//* CREATE ORDERS SCHEMA //
import {
  insertOrderSchema,
  insertOrderWithItemsSchema,
  updateOrderSchema,
} from "../../db/ordersSchema.js";

//* ROUTERS //
const router = Router();

router.post(
  "/",
  verifyToken,
  validateData(insertOrderWithItemsSchema),
  createOrder
);

router.get("/", verifyToken, listOrders);
router.get("/:id", verifyToken, getOrder);
router.put("/:id", verifyToken, validateData(updateOrderSchema), updateOrder);

export default router;
