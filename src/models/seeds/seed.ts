import mongoose, { Types } from "mongoose";
import { MONGO_URI } from "../../env";
import { Category } from "../categorySchema";
import { Chat } from "../chatSchema";
import { Content } from "../contentSchema";
import { User } from "../userSchema";

const main = async () => {
  await mongoose.connect(MONGO_URI!);
  await Category.deleteMany();
  await User.deleteMany();
  await Chat.deleteMany();
  await Content.deleteMany();

  const users = await User.insertMany([
    {
      name: "user1",
      email: "bart@gmail.com",
      password: "$2b$10$VN2e9Gpczf6yELYPy3OIwekgRD29OnJZfYlaNK6H/wQuurAoymmq2",
    },
    {
      name: "user2",
      email: "user2@example.com",
      password: "$2b$10$VN2e9Gpczf6yELYPy3OIwekgRD29OnJZfYlaNK6H/wQuurAoymmq2",
    },
  ]);

  const categories = await Category.insertMany([
    {
      title: "HOME",
    },
    {
      title: "SCHOOL",
    },
    {
      title: "WORK",
    },
  ]);

  const contents = await Content.insertMany([
    {
      sender: users[0]._id,
      content: "First Message",
    },
    {
      sender: users[1]._id,
      content: "Second Message",
    },
    {
      sender: users[1]._id,
      content: "Hi, I think so, it populates well",
    },
  ]);

  const chats = await Chat.insertMany([
    {
      users: [
        new Types.ObjectId(users[0]._id),
        new Types.ObjectId(users[1]._id),
      ],
      categories: categories.map(
        (category) => new Types.ObjectId(category._id)
      ),
      name: "ROOM 1",
      contents: [
        new Types.ObjectId(contents[0]._id),
        new Types.ObjectId(contents[1]._id),
        new Types.ObjectId(contents[2]._id),
      ],
    },
    {
      users: [],
      categories: categories.map(
        (category) => new Types.ObjectId(category._id)
      ),
      name: "ROOM 2",
      contents: [],
    },
    {
      users: [],
      categories: categories.map(
        (category) => new Types.ObjectId(category._id)
      ),
      name: "ROOM 3",
      contents: [],
    },
  ]);

  const populatedChat = await Chat.findById(chats[0]._id).populate(
    "users contents categories"
  );

  console.log(populatedChat);
};

main()
  .catch((err) => {
    console.log(err);
  })
  .finally(async () => {
    await mongoose.disconnect();
    process.exit();
  });
