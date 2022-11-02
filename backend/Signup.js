import mongoose from "mongoose";

const Users = mongoose.Schema({
  email: String,
  password: String,
});

export default mongoose.model("login", Users);
