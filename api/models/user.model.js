import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        minLength: 3,
        required: true,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;