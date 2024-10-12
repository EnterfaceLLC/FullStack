import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Return Products");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("Return Product ID");
});

router.post("/", (req, res) => {
  res.send("Create Product");
});

export default router;
