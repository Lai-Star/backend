import mongoose from "mongoose";

async function db_connect() {
  try {
    await mongoose.connection.on("connected", () => {
      console.log("MongoDB connected at port 27017");
    });
    await mongoose.connect("mongodb+srv://root:yBsRFGZRs0jFhPjQ@cluster0.qg02egi.mongodb.net/Cawgo?retryWrites=true&w=majority");
  } catch (error) {
    console.log("Connection Error: ", error);
    throw Error("Unable to connect with MongoDB database");
  }
}

export default db_connect;
