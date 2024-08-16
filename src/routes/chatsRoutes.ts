import { Request, Response, Router } from "express";
import {
  redirectChat,
  renderChatroomPage,
  renderChatsPage,
} from "../controllers/chatsController";
import { Content } from "../models/contentSchema";
import { validateUser } from "../middleware/validate-user";
import { Chat } from "../models/chatSchema";

export const router = Router();

// http://localhost:3000/chats
router.get("/", validateUser, renderChatsPage);

// http://localhost:3000/chats
router.post("/", redirectChat);

// http://localhost:3000/chats/:id
router.get("/:id", validateUser, renderChatroomPage);

router.post("/:id", async (req: Request, res: Response) => {
  try {
    const userId = req.session?.currentUser?.id;

    const content = new Content({
      userId: userId,
      content: req.body.content,
    });
    console.log(req.body.content);

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
});
