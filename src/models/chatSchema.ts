import { model, Schema } from "mongoose";

export type chatType = {
  users: Schema.Types.ObjectId[];
  categories: Schema.Types.ObjectId[];
  contents: Schema.Types.ObjectId[];
  name: string;
};

export const chatSchema = new Schema<chatType>({
  users: {
    type: [Schema.Types.ObjectId],
    ref: "User", // based on model
    required: true,
  },
  categories: {
    type: [Schema.Types.ObjectId],
    ref: "Category", // based on model
    required: true,
  },
  contents: {
    type: [Schema.Types.ObjectId],
    ref: "Content", // based on model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const Chat = model<chatType>("Chat", chatSchema);
