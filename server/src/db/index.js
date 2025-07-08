import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/dashboard`
    );
    console.log(`mongo DB connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
