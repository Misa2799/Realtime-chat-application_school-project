import { Model, model, Schema } from "mongoose";

export type ChatType = {
  users: Schema.Types.ObjectId[];
  categories: Schema.Types.ObjectId[];
  contents: Schema.Types.ObjectId[];
  name: string;
};

//?
type ChatModel = Model<ChatType>;

export const chatSchema = new Schema<ChatType, ChatModel>({
  users: [
    {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
  ],
  categories: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
    },
  contents: {
      type: [Schema.Types.ObjectId],
      ref: "Content",
    },
  name: {
    type: String,
    required: true,
  },
},{timestamps:true, versionKey: false});

export const Chat = model<ChatType, ChatModel>("Chat", chatSchema);
