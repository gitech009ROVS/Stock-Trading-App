import { model } from "mongoose";
import { UserSchema } from "../schemas/UserSchema.js";

const User = new model("User", UserSchema);

export { User };
