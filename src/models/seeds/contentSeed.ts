import mongoose, { Types } from "mongoose";
import { dbUrl } from "../..";
import { Content } from "../contentSchema";

const contentData = [
  {
    userId: new Types.ObjectId("66be30c61a4218de3999eaec"),
    content: "first message",
  },
  {
    userId: new Types.ObjectId("66be30c61a4218de3999eaed"),
    content: "second message",
  },
];

mongoose.connect(dbUrl!).then(async (r) => {
  try {
    await Content.deleteMany();
    const insertedContent = await Content.insertMany(contentData);
    console.log("content data inserted:", insertedContent);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
    process.exit();
  }
});
