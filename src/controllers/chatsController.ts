import { Request, Response } from "express";
import { Category } from "../models/categorySchema";
import { Chat } from "../models/chatSchema";

// Link to the chats page
export const renderChatsPage = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({});
    console.log(categories);
    const chats = await Chat.find({});
    console.log(chats);
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

export const renderChatroomPage = (req: Request, res: Response) => {
  res
    .status(200)
    .render("pages/chats/chatroom", { error: null, title: "chatroom" }); // we should pass the variables about categories and chats from DB or hard-coded
};
