//* EXPRESS //
import { Request, Response, NextFunction } from "express";

//* JWT //
import jwt from "jsonwebtoken";

//* MIDDLEWARE FUNCTION //
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({ error: "Access Denied" });
    return;
  }

  try {
    //TODO DECODE TOKEN DATA //
    const decoded = jwt.verify(token, "SECRET");
    if (typeof decoded !== "object" || !decoded.userId) {
      res.status(401).json({ error: "Access Denied" });
      return;
    }

    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (err) {
    res.status(401).json({ error: "Access Denied" });
  }
}

export function verifySeller(req: Request, res: Response, next: NextFunction) {
  const role = req.role;

  if (role !== "seller") {
    res.status(401).json({ error: "Access Denied" });
    return;
  }
  next();
}
