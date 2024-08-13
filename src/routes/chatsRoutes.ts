import { Request, Response, Router } from "express";
import { renderChatroomPage, renderChatsPage } from "../controllers/chatsController";

export const router = Router();

router.get("/", renderChatsPage);

router.get("/1", renderChatroomPage);
