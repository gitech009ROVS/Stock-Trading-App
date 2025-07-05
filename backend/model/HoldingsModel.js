import { HoldingsSchema } from "../schemas/HoldingsSchema.js";
import { model } from "mongoose";

const Holding = new model("Holding", HoldingsSchema);

export { Holding };
