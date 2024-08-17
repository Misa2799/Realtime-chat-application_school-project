import { Request, Response } from "express";
import { Category } from "../models/categorySchema";
import { Chat } from "../models/chatSchema";
import { User } from "../models/userSchema";
import { Content } from "../models/contentSchema";
import { ObjectId } from "mongoose";

// Link to the chats page
export const renderChatsPage = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({});
    const chats = await Chat.find({});
    const user = req.session!.currentUser;

    res.status(200).render("pages/chats/chat", {
      error: null,
      title: "chat",
      categories,
      chats,
      user
    });
  } catch (error) {
    console.error("cannot enter the room", error);
  }
};

export const redirectChat = async (req: Request, res: Response) => {
  const { chatroom } = req.body;

  res.redirect(`/chats/${chatroom}`);
};

export const renderChatroomPage = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const chat = await Chat.findById(id)
    .populate("users contents categories")
      .populate({
        path: "contents",
        populate: {
          path: "sender"
        }
      })
    //content.userIdがcontent.senderになってしまっているから？
    // const chatHistories = chat?.contents.map(content => {
    //   const chatHistory = chat.users.find(user => user._id === content.userId)
    //   return chatHistory
    // })

    const contentsData = chat?.contents;
    const userData = chat?.users;

    console.log("contents: ",contentsData);
    console.log("users: ",userData);

    // console.log(chatHistories);

    // const transformed = chat?.users.reduce((acc, user) => {
    //   acc.id.push(user._id);
    //   acc.name.push(user.name);
    //   return acc;
    // }, { id: [] as ObjectId[], name: [] as string[] });
    
    // console.log("transform:" ,transformed);
    
      // const chatHistories = chat?.contents.map((content) => {
      //   chat.users.find((user) => user._id === content)
      // })

    if (!chat) {
      res.status(404).render("pages/not-found");
    }

    res.status(200).render(`pages/chats/chatroom`, { chat , chatHistories});
  } catch (error) {
    console.error("cannot enter the room", error);
    res.json({ message: "error" });
  }
};
