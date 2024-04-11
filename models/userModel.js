const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, " user is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Blog",
        },
    ],
},
    {
        timestamps: true
    });

const userModel = mongoose.model("User", userShema);
module.exports = userModel;