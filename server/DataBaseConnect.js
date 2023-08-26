import mongoose from "mongoose";

export const DataBaseConnect = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected succesfully");
    } catch (error) {
        console.log(`Error, ${error.message}`);
        process.exit(1);
    }
};
