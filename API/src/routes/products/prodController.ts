//* TYPES //
import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("Return All Products");
}

export function getProductById(req: Request, res: Response) {
  res.send("Return A Product ID");
}

export function createProduct(req: Request, res: Response) {
  res.send("Create New Product");
}

export function updateProduct(req: Request, res: Response) {
  res.send("Update Product");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("Delete Product");
}
