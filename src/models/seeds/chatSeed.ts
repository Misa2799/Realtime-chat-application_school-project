import mongoose, { Types } from "mongoose";
import { dbUrl } from "../..";
import { Chat, chatType } from "../chatSchema";
import { User } from "../userSchema";

const chatData = [
  {
    users: [new Types.ObjectId("66be26bf310dafc93459dc1c")],
    categories: ["66bd1accc9eefdc21a5d674b"],
    contents: ["66bd22763f3b0c5faae05085", "66bd2281746722f7ab6ec04e"],
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

    //content
    const insertedChat = await Chat.insertMany(chatData);
    console.log("content data inserted:", insertedChat);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
});
