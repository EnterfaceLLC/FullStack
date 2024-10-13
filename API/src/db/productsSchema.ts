//* DRIZZLE //
import {
  doublePrecision,
  integer,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";

//* DRIZZLE ZOD //
import { createInsertSchema } from "drizzle-zod";

//* SCHEMAS //
export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: doublePrecision().notNull(),
  description: text(),
  image: varchar({ length: 255 }),
});

export const createProdSchema = createInsertSchema(productsTable).omit({
  id: true,
});

export const updateProdSchema = createInsertSchema(productsTable)
  .omit({
    id: true,
  })
  .partial();
