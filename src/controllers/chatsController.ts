import { Request, Response } from "express";

// Link to the chats page
export const renderChatsPage = (req: Request, res: Response) => {
  res.status(200).render("pages/chats/chat", { error: null, title: "chat" }); // we should pass the variables about categories and chats from DB or hard-coded
};

export const renderChatroomPage = (req: Request, res: Response) => {
  res.status(200).render("pages/chats/chatroom", { error: null, title: "chatroom" }); // we should pass the variables about categories and chats from DB or hard-coded
};
