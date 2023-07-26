import { Schema, model } from "mongoose";
import Product from "../types/product";

const ProductSchema = new Schema<Product>(
  {
    name: String,
    description: String,
    code: String,
    price: Number,
    images: [String],
  },
  { timestamps: true }
);

const ProductModel = model("products", ProductSchema);
export default ProductModel;
