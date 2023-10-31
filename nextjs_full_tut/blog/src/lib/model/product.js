import mongoose from "mongoose";


const productModel = new mongoose.Schema({
    name: String,
    price: String,
    brand: String,
    color: String,
})

export const Product = mongoose.models.products || mongoose.model("products", productModel);
// Here collection name = products and db name = productDB