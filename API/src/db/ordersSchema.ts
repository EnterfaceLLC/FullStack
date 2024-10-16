//* DRIZZLE //
import {
  doublePrecision,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

//* DB SCHEMAS //
import { usersTable } from "./usersSchema.js";
import { productsTable } from "./productsSchema.js";

//* DRIZZLE ZOD //
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

//* SCHEMAS //
export const ordersTable = pgTable("orders", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp().notNull().defaultNow(),
  status: varchar({ length: 50 }).notNull().default("New"),

  userId: integer()
    .references(() => usersTable.id)
    .notNull(),
});

export const ordersItemsTable = pgTable("orders_items", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  orderId: integer()
    .references(() => ordersTable.id)
    .notNull(),
  productId: integer()
    .references(() => productsTable.id)
    .notNull(),

  quantity: integer().notNull(),
  price: doublePrecision().notNull(),
});

export const insertOrderSchema = createInsertSchema(ordersTable).omit({
  id: true,
  createdAt: true,
  status: true,
  userId: true,
});

export const insertOrderItemSchema = createInsertSchema(ordersItemsTable).omit({
  id: true,
  orderId: true,
});

export const insertOrderWithItemsSchema = z.object({
  order: insertOrderSchema,
  items: z.array(insertOrderItemSchema),
});
