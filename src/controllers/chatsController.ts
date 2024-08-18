import { Request, Response } from "express";
import { User } from "../models/userSchema";
import { Category } from "../models/categorySchema";
import { Chat } from "../models/chatSchema";
import { Content } from "../models/contentSchema";
import { log } from "console";

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
      user,
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
  const userName = req.session!.currentUser.name;

  try {
    const chat = await Chat.findById(id)
      .populate("users contents categories")
      .populate({
        path: "contents",
        populate: {
          path: "sender",
        },
      });

    if (!chat) {
      res.status(404).render("pages/not-found");
    }

    res.status(200).render(`pages/chats/chatroom`, { chat, userName });
  } catch (error) {
    console.error("cannot enter the room", error);
    res.json({ message: "error" });
  }
};

export const sendMsgToDB = async (req: Request, res: Response) => {
  try {
    const userId = req.session?.currentUser?.id;

    const content = new Content({
      sender: userId,
      content: req.body.content,
    });

    const newContent = await content.save();

    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      return res.status(404).json({ error: "Chatroom not found" });
    }

    chat.contents.push(newContent.id);
    await chat.save();
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
