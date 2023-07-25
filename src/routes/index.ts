import { Request, Response, Router } from "express";
import { productRoutes } from "./products";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ data: "Demo data" });
});

router.use(productRoutes)

export { router };
