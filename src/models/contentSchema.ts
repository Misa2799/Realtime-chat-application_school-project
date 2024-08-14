import { Schema, model } from "mongoose";

export interface IContents {
  userId: Schema.Types.ObjectId;
  content: string;
}

const contentSchema = new Schema<IContents>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Content = model<IContents>("Content", contentSchema);
