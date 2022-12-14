import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema

const userSchema = new schema({
    profile_picture: {

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model('User', userSchema);
export default user;