import mongoose from "mongoose";
import { dbUrl } from "../..";
import User from "../userSchema";

const userData = [
  {
    name: "John",
    email: "john@example.com",
    password: "pw123",
  },
];

mongoose.connect(dbUrl!).then(async (r) => {
  try {
    //content
    const insertedUser = await User.insertMany(userData);
    console.log("user data inserted:", insertedUser);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
});
