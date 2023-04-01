import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(prcoess.env.MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (erros) {
    return Promise.reject(erros);
  }
};

export default connectMongo;
