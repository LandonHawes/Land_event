import { Schema, models, model } from "mongoose";

export interface ICategory extends Document {
  name: string;
  _id: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
