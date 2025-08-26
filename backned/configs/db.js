import mongoose from "mongoose";

const connectDB = async () => {
  try {
     mongoose.connection.on('connected', () => {
      console.log("Mongoose connected to DB Cluster");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);

   

   
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;