import { Request, Response, Router } from "express";
import { login, logout, register } from "../controllers/authController";

export const router = Router();

router.get("/register", register);
router.get("/login", login);
router.get("/logout", logout);
