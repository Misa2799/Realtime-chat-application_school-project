import mongoose from "mongoose";
import { dbUrl } from "../..";
import { Content } from "../contentSchema";

const contentData = [
  {
    userId: "66bda4070d87c1aba8e11521",
    content: "second message",
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
