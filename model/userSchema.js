const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    num:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


const userModel = mongoose.model('user_details', userSchema)
module.exports = userModel