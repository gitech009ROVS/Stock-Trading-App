import { model } from "mongoose";
import { PositionsSchema } from "../schemas/PositionsSchema.js";

const Position = new model("Position", PositionsSchema);

export { Position };
