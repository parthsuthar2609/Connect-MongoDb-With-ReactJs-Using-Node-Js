import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            'mongodb+srv://@cluster0.ajyukl4.mongodb.net/BackendDb?retryWrites=true&w=majority&appName=Cluster0',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );  
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;
