import mongoose from "mongoose";
import * as dotenv from 'dotenv';


dotenv.config();
// console.log(dbURI)
console.log(process.env.mongoDBpsw)

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://testo:testi@bookface.uf9sjvt.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
        console.log("DB connected")
    } catch (err) {
        console.log(`connection to the DB failed ${err}`)
    }
}

export default connectDB