import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    product_slug: { type: Number, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
