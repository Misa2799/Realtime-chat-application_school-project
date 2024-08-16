import { Request, Response, Router } from "express";
import {
  redirectChat,
  renderChatroomPage,
  renderChatsPage,
} from "../controllers/chatsController";
import { validateUser } from "../middleware/validate-user";

export const router = Router();

router.get("/", validateUser, renderChatsPage);
router.post("/", validateUser, redirectChat);
router.get("/:id", renderChatroomPage);
