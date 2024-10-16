//* DATABASE //
import { ordersTable, ordersItemsTable } from "../../db/ordersSchema.js";
import { db } from "../../db/index.js";

//* TYPES //
import { Request, Response } from "express";

//* PRODUCTS FUNCTIONS //
export async function createOrder(req: Request, res: Response) {
  try {
    const { order, items } = req.cleanBody;
    const userId = req.userId;
    if (!userId) {
      res.status(400).json({ message: "Invalid order data!" });
    }

    const [newOrder] = await db
      .insert(ordersTable)
      .values({ userId: userId })
      .returning();

    //TODO Validate Order ID's and retreive the actual Price from db //

    const orderItems = items.map((item: any) => ({
      ...item,
      orderId: newOrder.id,
    }));

    const newOrderItems = await db
      .insert(ordersItemsTable)
      .values(orderItems)
      .returning();

    res.status(201).json({ ...newOrder, items: newOrderItems });

    res.json();
  } catch (err) {
    res.status(400).json({ message: "Invalid order data!" });
  }
}
