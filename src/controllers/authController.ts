import { Request, Response } from "express";

// link to register
export const register = (req: Request, res: Response) => {
  res.status(200).render("pages/auth/register", { error: null, title: "register" });
};

//link to login
export const login = (req: Request, res: Response) => {
  // if (req.session && req.session.user) {
  //   return res.status(400).render("pages/auth/login", { error: "Please logout" });
  // }
  res.status(200).render("pages/auth/login", { error: null, title: "login" });
};

export const logout = (req: Request, res: Response) => {
  // req.session = null;
  res.status(200).redirect("/auth/login");
};
