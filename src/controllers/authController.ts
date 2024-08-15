import bcrypt from "bcrypt"
import { Request, Response } from "express";
import { User } from "../models/userSchema";

// link to register
export const registerRender = (req: Request, res: Response) => {
  res.status(200).render("pages/auth/register", { error: null, title: "register" });
};

//link to login
export const loginRender = (req: Request, res: Response) => {
  // if (req.session && req.session.user) {
  //   return res.status(400).render("pages/auth/login", { error: "Please logout" });
  // }
  res.status(200).render("pages/auth/login", { error: null, title: "login" });
};

export const logout = (req: Request, res: Response) => {
  // req.session = null;
  res.status(200).redirect("/auth/login");
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.render("pages/auth/login", { title: "Login", error: "Invalid email or password" });
    return;
  }

  res.redirect("/chats");

};

export const register = async (req: Request, res: Response)=>{
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const userData = [
      {
        name,
        email,
        password: hashedPassword
      },
    ];

    try {
      const newUser = await User.insertMany(userData);
      
      res.status(200).render("pages/auth/login",{title: "login", error: null});
      
    } catch (error) {
      res.status(404).render("pages/auth/register", {title: "register", error: "User already existed, Please use other Email"});
      
    }

};
