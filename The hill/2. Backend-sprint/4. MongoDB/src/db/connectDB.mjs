import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();


// console.log(process.env.mongoDBpsw4)

mongoose.set('strictQuery', true);

const connectDB = () => {

    mongoose.connect(process.env.mongoDBpsw2,
        {
            dbName: "BookFace",
            useNewUrlParser: true
        },
        console.log("Connected to db!"));
}

export default connectDB