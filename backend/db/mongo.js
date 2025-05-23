import mongoose from "mongoose";

const mongo_db = async () => {
    try {
        await mongoose.connect( process.env.MONGO_DB_URL ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB database is connected!");
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
}

export default mongo_db;