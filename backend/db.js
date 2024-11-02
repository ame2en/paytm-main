import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/paytm-app1").then(console.log("connected to the database"));



const UserSchema = new mongoose.Schema({
    username: {
        type: String, // Corrected from typeof to type
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model('User', UserSchema);

export { User };
