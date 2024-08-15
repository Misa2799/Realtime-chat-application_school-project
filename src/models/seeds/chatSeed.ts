import mongoose from "mongoose";
import { dbUrl } from "../..";
import { Chat } from "../chatSchema";

const chatData = [
  {
    users: ["66bd1b3bc9eefdc21a5d674e", "66bd1b91c9eefdc21a5d674f"],
    categories: [
      "66bd1accc9eefdc21a5d674b",
      "66bd1af9c9eefdc21a5d674c",
      "66bd1b09c9eefdc21a5d674d",
    ],
    contents: ["66bd22763f3b0c5faae05085", "66bd2281746722f7ab6ec04e"],
    name: "room2",
  },
];

mongoose.connect(dbUrl!).then(async (r) => {
  try {
    //content
    const insertedChat = await Chat.insertMany(chatData);
    console.log("content data inserted:", insertedChat);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
});
