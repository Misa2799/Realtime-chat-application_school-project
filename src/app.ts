import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { router as indexRouter } from "./routes/indexRoutes";
import { router as authRouter } from "./routes/authRoutes";
import { router as chatsRouter } from "./routes/chatsRoutes";
import cookieSession from "cookie-session";
export const app = express();
const baseUrl = "/api/v1";

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setup layout
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.use(expressEjsLayouts);

// setup to let express know where to find static files are
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//setup cookie session
app.use(
  cookieSession({
    name: "session",
    keys: ["secret key1", "key1"],
    maxAge: 1000 * 60 * 30
  })
);
  app.use((req,res,next)=>{
    req.app.locals = {
      currentUser: req.session?.currentUser,
      error:null,
      title:null
    };
    next();
  })

// app.use(`${baseUrl}`, productsRouter);
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/chats", chatsRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found Route" });
});


