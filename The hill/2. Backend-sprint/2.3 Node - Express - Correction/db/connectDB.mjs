import client from "./client.mjs";

const connectDB = await client.connect();

export default connectDB;