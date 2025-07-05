import { model } from "mongoose";
import { OrderSchema } from "../schemas/OrderSchema.js";

const Order = new model("Order", OrderSchema);

export { Order };
