import mongoose from "mongoose";
import { dbUrl } from "../..";
import { Category } from "../categorySchema";

const categoryData = [
  {
    title: "HOME",
  },
  {
    title: "SCHOOL",
  },
  {
    title: "WORK",
  },
];

mongoose.connect(dbUrl!).then(async (r) => {
  try {
    await Category.deleteMany();
    const insertedCategory = await Category.insertMany(categoryData);
    console.log("category data inserted:", insertedCategory);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
    process.exit();
  }
});
