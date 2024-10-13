//* DRIZZLE //
import {
  doublePrecision,
  integer,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";

//* SCHEMAS //
export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: doublePrecision().notNull(),
  description: text(),
  image: varchar({ length: 255 }),
});
