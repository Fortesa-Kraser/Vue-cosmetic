import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    type: String,
    rooms: Number,
    squareMeters: Number,
    price: Number,
    files: String,
    userId: String,
  },
  { typeKey: "$type" }
);

const model = mongoose.model("vuecosmetices", schema);

export default model;
