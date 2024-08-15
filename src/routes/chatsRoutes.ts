import { Request, Response, Router } from "express";
import {
  redirectChat,
  renderChatroomPage,
  renderChatsPage,
} from "../controllers/chatsController";
import { Content } from "../models/contentSchema";
import { validateUser } from "../middleware/validate-user";

export const router = Router();

// http://localhost:3000/chats
router.get("/", validateUser, renderChatsPage);

// http://localhost:3000/chats
router.post("/", redirectChat);

// http://localhost:3000/chats/:id
router.get("/:id", validateUser, renderChatroomPage);

// router.post("/:id", (req, res) => {
//   console.log("id", req.params);
//   console.log("REQ", req.body);
//   res.status(200).json("SENDING MESSAGE");
// });

router.post("/:id", async (req: Request, res: Response) => {
  const content = new Content({
    userId: "66be30c61a4218de3999eaec",
    content: req.body.content,
  });
  try {
    const newContent = await content.save();
    res.status(200);

    // save content in chats collection too
    // res.status(200).json(newContent);

    // const newMessages = [];
    // newMessages.push(req.body.content);
    // res.status(200).render("pages/chats/chatroom", { newMessages });
  } catch (error) {
    console.error("error", error);
  }
});
