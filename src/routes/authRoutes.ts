import { Request, Response, Router } from "express";
import { loginRender, logout, register, registerRender } from "../controllers/authController";
import { User, } from "../models/userSchema";

export const router = Router();

//URL: http:localhost:3000/auth

router.get("/register", registerRender);
router.post("/register", register);

router.get("/login", loginRender);

router.get("/logout", logout);

//just for check data is data base **I gonna delete it later
router.get("/", async (_: Request, response: Response)=>{
    const allUser = await User.find();
    response.json(allUser);
});

