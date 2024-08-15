import { Request, Response, Router } from "express";
import {
  redirectChat,
  renderChatroomPage,
  renderChatsPage,
} from "../controllers/chatsController";

export const router = Router();

router.get("/", renderChatsPage);

router.post("/", redirectChat);

router.get("/:id", renderChatroomPage);
