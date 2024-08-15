import { Request, Response } from "express";
import { User } from "../models/userSchema";
import { Category } from "../models/categorySchema";
import { Chat } from "../models/chatSchema";
import { Content } from "../models/contentSchema";

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
  try {
    const chat = await Chat.findById(chatroom)
      .populate("users", "", User)
      .populate("categories")
      .populate("contents", "", Content)
      .lean()
      .exec();

    res
      .status(200)
      .render("pages/chats/chatroom", { error: null, title: "chatroom", chat });
  } catch (error) {
    console.error("cannot enter the room", error);
    res.json({ message: "error" });
  }
};

`Schema hasn't been registered for model "User".\nUse mongoose.model(name, schema)`;
