import { Schema } from "mongoose";

const OrderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  username: String,
});

export { OrderSchema };
