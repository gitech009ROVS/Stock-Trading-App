import { Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

export { UserSchema };
