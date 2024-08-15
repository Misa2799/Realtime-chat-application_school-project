import mongoose, { Types } from "mongoose";
import { dbUrl } from "../..";
import { Chat, chatType } from "../chatSchema";
import { User } from "../userSchema";

const chatData = [
  {
    users: [
      new Types.ObjectId("66be30c61a4218de3999eaed"),
      new Types.ObjectId("66be30c61a4218de3999eaec"),
    ],
    categories: [new Types.ObjectId("66bda42a2ba998eed36e3aeb")],
    contents: [
      new Types.ObjectId("66be3156a7756ff9e26ec724"),
      new Types.ObjectId("66be3156a7756ff9e26ec725"),
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
