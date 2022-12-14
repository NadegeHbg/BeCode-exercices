import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema

const profileSchema = new schema({
    profile_picture: {

    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
})

const profile = mongoose.model('Profile', profileSchema);
export default profile;