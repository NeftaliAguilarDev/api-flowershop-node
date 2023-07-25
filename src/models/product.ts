import { Schema, model } from "mongoose";
import Product from "../types/product";

const ProductSchema = new Schema<Product>(
  {
    name: String,
    description: String,
    price: Number,
  },
  { timestamps: true }
);

const ProductModel = model("products", ProductSchema);
export default ProductModel;
