import { Request, Response, Router } from "express";
import {
  redirectChat,
  renderChatroomPage,
  renderChatsPage,
  sendMsgToDB,
} from "../controllers/chatsController";
import { Content } from "../models/contentSchema";
import { validateUser } from "../middleware/validate-user";
import { Chat } from "../models/chatSchema";

export const router = Router();

// http://localhost:3000/chats
router.get("/", validateUser, renderChatsPage);

// http://localhost:3000/chats
router.post("/", validateUser, redirectChat);

// http://localhost:3000/chats/:id
router.get("/:id", validateUser, renderChatroomPage);

router.post("/:id", validateUser, sendMsgToDB);
