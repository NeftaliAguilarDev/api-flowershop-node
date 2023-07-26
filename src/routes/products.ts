import { Router } from "express";
import {
  showProduct,
  getProducts,
  storeProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products";
const router = Router();

router.get("/products", getProducts);
router.post("/products", storeProduct);
router.get("/products/:id", showProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export { router as productRoutes };
