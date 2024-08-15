import { model, Schema } from "mongoose";
import { User } from "./userSchema";
import { Category } from "./categorySchema";
import { Content } from "./contentSchema";

export type chatType = {
  users: Schema.Types.ObjectId[];
  categories: Schema.Types.ObjectId[];
  contents: Schema.Types.ObjectId[];
  name: string;
};

export const chatSchema = new Schema<chatType>({
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

export const Chat = model<chatType>("Chat", chatSchema);
