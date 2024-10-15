import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  foodName: { type: String },
  image: { type: String },
  stock: { type: Number },
  starRatings: { type: Number },
  price: { type: Number },
  description: { type: String },
  Category: { type: String },
});

const Food = mongoose.model("food", FoodSchema);

export default Food;
