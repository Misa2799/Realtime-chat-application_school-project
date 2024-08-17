import mongoose, { model, Model } from "mongoose";

const {Schema} = mongoose;

type CategoryType = {
    title: string;
}

type CategoryModel = Model<CategoryType>;

const CategorySchema = new Schema<CategoryType>({
    title: {
        type: String,
        required: true,
        trim: true,
    }
},{timestamps: true, versionKey: false});

export const Category = model<CategoryType, CategoryModel>("Category", CategorySchema);