import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
});
const User = mongoose.model("User",userSchema);

export default User;



// import express from "express";
// import { signup, login } from "../controller/user.controller.js";
// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);

// export default router;