import mongoose, { Types } from "mongoose";
import { dbUrl } from "../..";
import { Content } from "../contentSchema";

const contentData = [
  {
    userId: new Types.ObjectId("66c028f08040dcc6cad39378"),
    content: "first message",
  },
  {
    userId: new Types.ObjectId("66c028f08040dcc6cad39379"),
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
