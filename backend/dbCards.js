import mongoose from "mongoose";

const dbCards = mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  git: String,
  linked: String,
  hack: String,
  stack: String,
  hire: String,
  img: String,
});

export default mongoose.model("myFirstDatabase", dbCards);
