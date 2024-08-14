import mongoose from "mongoose";

const {Schema} = mongoose;

type Categorytype = {
    title: string;
}

const CategorySchema = new mongoose.Schema <Categorytype>({
    title: {
        type: String,
        required: true,
        trim: true,
    }
})

export const Category = mongoose.model<Categorytype>("Category", CategorySchema);