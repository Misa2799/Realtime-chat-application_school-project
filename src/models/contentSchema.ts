import mongoose, { Model, Schema, model } from "mongoose";

export interface ContentType {
  sender: Schema.Types.ObjectId;
  content: string;
}

type ContentModel = Model<ContentType>;

const contentSchema = new Schema<ContentType, ContentModel>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Content = mongoose.model<ContentType, ContentModel>("Content", contentSchema);
