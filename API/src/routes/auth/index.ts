//* EXPRESS //
import { Router } from "express";

//* MIDDLEWARE //
import { validateData } from "../../middlewares/validationMiddleware";

//* DATABASE //
import { db } from "../../db/index";

//* CREATE USER SCHEMA //
import {
  createUserSchema,
  loginUserSchema,
  usersTable,
} from "../../db/usersSchema";

//* BCRYPT //
import bcrypt from "bcryptjs";

//* DRIZZLE //
import { eq } from "drizzle-orm";

//* JWT //
import jwt from "jsonwebtoken";

//* ROUTERS //
const router = Router();

router.post("/register", validateData(createUserSchema), async (req, res) => {
  try {
    const data = req.cleanBody;
    data.password = await bcrypt.hash(data.password, 10);

    const [user] = await db.insert(usersTable).values(data).returning();

    // @ts-ignore
    delete user.password;

    res.status(201).json({ user });
  } catch (err) {
    res.status(500).send("Somethings went wrong!");
  }
});

router.post("/login", validateData(loginUserSchema), async (req, res) => {
  try {
    const { email, password } = req.cleanBody;

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (!user) {
      res.status(401).json({ error: "Authentication failed" });
      return;
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      res.status(401).json({ error: "Authentication failed" });
      return;
    }

    //TODO JWT TOKEN //
    const token = jwt.sign({ userId: user.id, role: user.role }, "SECRET", {
      expiresIn: "30d",
    });

    // @ts-ignore
    delete user.password;

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).send("Somethings went wrong!");
  }
});

export default router;
