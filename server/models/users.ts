import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt";

const defaultSettings = {
  language: 'en',
  currency: 'USD',
};

const schema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String, bcrypt: true },
    name: String,
    avatar: String,
    premium: Date,
    settings: { type: Object, default: defaultSettings},
  },
  { timestamps: true, strict: true, strictQuery: true }
);

schema.plugin(bcrypt);
export default mongoose.model("User", schema, "user");
