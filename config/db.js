import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI
        );
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};
