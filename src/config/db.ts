import "dotenv/config";
import { connect } from "mongoose";

const dbConnection = async () => {
  await connect(`${process.env.MONGODB}`);
};

export default dbConnection;
