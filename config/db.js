import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://ikramaslam12:zhcpWdpzA7nce5aA@ac-qppu5lx-shard-00-00.g74l9qr.mongodb.net:27017,ac-qppu5lx-shard-00-01.g74l9qr.mongodb.net:27017,ac-qppu5lx-shard-00-02.g74l9qr.mongodb.net:27017/?ssl=true&replicaSet=atlas-xrsboh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};
