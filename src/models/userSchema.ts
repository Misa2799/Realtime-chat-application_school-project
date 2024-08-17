
import mongoose, { ObjectId, Schema } from "mongoose"; 


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export interface IUser extends Document{
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}

export const User = mongoose.model("User", userSchema);
