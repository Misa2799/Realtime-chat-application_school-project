import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { router as indexRouter } from "./routes/indexRoutes";
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

// app.use(`${baseUrl}`, productsRouter);
app.use("/", indexRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found Route" });
});
