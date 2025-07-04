import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://krishnaendravath:14062003@cluster0.ixxqjv7.mongodb.net/bytebites').then( () => {
            console.log("MongoDB connected successfully");
        }
    )

}