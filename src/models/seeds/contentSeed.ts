import mongoose from "mongoose";
import { dbUrl } from "../..";
import { Content } from "../contentSchema";

const contentData = [
  {
    userId: "66bd1b3bc9eefdc21a5d674e",
    content: "first message",
  },
];

mongoose.connect(dbUrl!).then(async (r) => {
  try {
    //content
    const insertedContent = await Content.insertMany(contentData);
    console.log("content data inserted:", insertedContent);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
});
