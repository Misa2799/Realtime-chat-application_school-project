import { NextFunction, Request, Response } from "express";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currentUser = req.session?.currentUser;

  if (!currentUser) {
    res.redirect("/auth/login");
    return;
  }

  next();
};