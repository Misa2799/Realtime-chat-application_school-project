import mongoose from "mongoose";
import { dbUrl } from "../..";
import { User } from "../userSchema";

const userData = [
  {
    name: "user1",
    email: "user1@example.com",
    password: "pw123",
  },
  {
    name: "user2",
    email: "user2@example.com",
    password: "pw123",
  },
];

mongoose.connect(dbUrl!).then(async (r) => {
  try {
    //content
    await User.deleteMany();
    const insertedUser = await User.insertMany(userData);
    console.log("user data inserted:", insertedUser);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
    process.exit();
  }
});
