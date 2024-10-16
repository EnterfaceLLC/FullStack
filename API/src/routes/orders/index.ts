//* EXPRESS //
import { Router } from "express";

//* MIDDLEWARE //
import { validateData } from "../../middlewares/validationMiddleware.js";
import { verifyToken } from "../../middlewares/authMiddleware.js";

//* DATABASE //
import { db } from "../../db/index.js";

//* ORDER CONTROLLERS //
import { createOrder } from "./orderController.js";

//* CREATE ORDERS SCHEMA //
import {
  insertOrderSchema,
  insertOrderWithItemsSchema,
} from "../../db/ordersSchema.js";

//* ROUTERS //
const router = Router();

router.post(
  "/",
  verifyToken,
  validateData(insertOrderWithItemsSchema),
  createOrder
);

export default router;
