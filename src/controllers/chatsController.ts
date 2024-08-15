import { Request, Response } from "express";
import { User } from "../models/userSchema";
import { Category } from "../models/categorySchema";
import { Chat } from "../models/chatSchema";
import { Types } from "mongoose";

// Link to the chats page
export const renderChatsPage = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({});
    const chats = await Chat.find({});
    res.status(200).render("pages/chats/chat", {
      error: null,
      title: "chat",
      categories,
      chats,
    });
  } catch (error) {
    console.error("cannot enter the room", error);
  }
};

export const renderChatroomPage = async (req: Request, res: Response) => {
  const { category, chatroom } = req.body;
  if (!category || !chatroom) {
    res.status(400).render("pages/chats/chat", {
      error: "Please chose Category and Chatroom",
      title: "chats",
    });
  }

  // const chatroomId = new mongoose.Types.ObjectId(chatroom);
  // const categoryId = new mongoose.Types.ObjectId(category);
  try {
    // const chat = await Chat.findById(chatroom);
    // console.log(chat!.users);
    const chat = await Chat.findById(chatroom).populate({ path: "users" });
    console.log(chat);

    res
      .status(200)
      .render("pages/chats/chatroom", { error: null, title: "chatroom" });
    // we should pass the variables about categories and chats from DB or hard-coded
  } catch (error) {
    console.error("cannot enter the room", error);
    res.json({ message: "error" });
  }
};

`Schema hasn't been registered for model "User".\nUse mongoose.model(name, schema)`;
