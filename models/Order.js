const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;

//second create schema
const productCartSchema = new mongoose.Schema({
  product: {
    type: objectId,
    ref: "product",
  },
  name: String,
  count: Number,
  price: Number,
});
const productCartSchema = mongoose.model("productCart", productCartSchema);

//first create schema
const OrderSchema = new mongoose.Schema(
  {
    products: [productCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
      type: objectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const order = mongoose.model("order", OrderSchema);


module.exports = {order,productCart};