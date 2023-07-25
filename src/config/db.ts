import "dotenv/config";
import { connect } from "mongoose";

const dbConnection = async () => {
  await connect(`${process.env.MONGODB}`);
  console.log('connected to DB')
};

export default dbConnection;
