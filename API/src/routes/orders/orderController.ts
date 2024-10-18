//* DATABASE //
import { ordersTable, ordersItemsTable } from "../../db/ordersSchema.js";
import { db } from "../../db/index.js";

//* TYPES //
import { Request, Response } from "express";

//* DRIZZLE //
import { eq, or } from "drizzle-orm";

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

//TODO if role.admin, retun all orders //
//TODO if role.seller, return orders by seller.Id//
//TODO else return all orders by req.userId //

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await db.select().from(ordersTable);
    res.json(orders);
  } catch (err) {
    res.status(400).json({ message: "Invalid order data!" });
  }
}

export async function getOrder(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);

    //TODO Reqiures relationship setup //
    // const result = await db.query.ordersTable.findFirst({
    //   where: eq(ordersTable.id, id),
    //   with: {
    //     items: true,
    //   },
    // });

    const orderWithItems = await db
      .select()
      .from(ordersTable)
      .where(eq(ordersTable.id, id))
      .leftJoin(ordersItemsTable, eq(ordersTable.id, ordersItemsTable.orderId));

    if (orderWithItems.length === 0) {
      res.status(400).json({ message: "Order not found!" });
    }

    const mergedOrder = {
      ...orderWithItems[0].orders,
      items: orderWithItems.map((oi) => oi.orders_items),
    };

    res.status(200).json(mergedOrder);
  } catch (err) {
    res.status(400).json({ message: "Invalid order data!" });
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);

    const [updateOrder] = await db
      .update(ordersTable)
      .set(req.body)
      .where(eq(ordersTable.id, id))
      .returning();

    if (!updateOrder) {
      res.status(400).json({ message: "Order not found!" });
    } else {
      res.status(200).json(updateOrder);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
