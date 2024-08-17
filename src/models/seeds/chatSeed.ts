import mongoose, { Types } from "mongoose";
import { dbUrl } from "../..";
import { Chat, ChatType } from "../chatSchema";
import { User } from "../userSchema";

const chatData = [
  {
    users: [
      new Types.ObjectId("66c028f08040dcc6cad39378"),
      new Types.ObjectId("66c028f08040dcc6cad39379"),
    ],
    categories: [new Types.ObjectId("66c028a2521ad6c592d7087a")],
    contents: [
      new Types.ObjectId("66c029560c2efa6cd991148c"),
      new Types.ObjectId("66c029560c2efa6cd991148d"),
    ],
    name: "room1",
  },
  {
    users: [],
    categories: [],
    contents: [],
    name: "room2",
  },
  {
    users: [],
    categories: [],
    contents: [],
    name: "room3",
  },
  {
    users: [],
    categories: [],
    contents: [],
    name: "room4",
  },
  {
    users: [],
    categories: [],
    contents: [],
    name: "room5",
  },
];

mongoose.connect(dbUrl!).then(async (r) => {
  try {
    await Chat.deleteMany();
    const insertedChat = await Chat.insertMany(chatData);
    console.log("content data inserted:", insertedChat);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
    process.exit();
  }
});
