import { Request, Response } from "express";
import dbConnection from "../config/db";

const getProducts = (req: Request, res: Response) => {
  try {
    res.send({ data: "Listado de productos" });
  } catch (error) {}
};

export { getProducts };
