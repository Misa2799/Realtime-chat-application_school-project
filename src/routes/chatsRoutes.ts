import { Request, Response, Router } from "express";
import { renderChatsPage } from "../controllers/chatsController";

export const router = Router();

router.get("/", renderChatsPage);
