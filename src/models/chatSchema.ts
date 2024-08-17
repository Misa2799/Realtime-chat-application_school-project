import mongoose, { model, Schema } from "mongoose";
import { IUser, User } from "./userSchema";
import { Category } from "./categorySchema";
import { Content, IContents } from "./contentSchema";

export interface chatType {
  users: IUser[];
  categories: Schema.Types.ObjectId[];
  contents: IContents[];
  name: string;
};

export const chatSchema = new mongoose.Schema<chatType>({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  ],
  contents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Content",
      required: true,
    },
  ],
  name: {
    type: String,
    required: true,
  },
});

export const Chat = mongoose.model<chatType>("Chat", chatSchema);
