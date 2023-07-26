import { Request, Response } from "express";
import dbConnection from "../config/db";

const getProducts = (req: Request, res: Response) => {
  try {
    res.send({ data: "Listado de productos" });
  } catch (error) {}
};
const storeProduct = (req: Request, res: Response) => {
  try {
    res.send({ data: "Guardando producto..." });
  } catch (error) {}
};
const showProduct = (req: Request, res: Response) => {
  try {
    res.send({ data: "Detalles del producto" });
  } catch (error) {}
};

const updateProduct = (req: Request, res: Response) => {
  try {
    res.send({ data: "Actualizando producto..." });
  } catch (error) {}
};
const deleteProduct = (req: Request, res: Response) => {
  try {
    res.send({ data: "Eliminando producto..." });
  } catch (error) {}
};

export { getProducts, storeProduct, showProduct, updateProduct, deleteProduct };
