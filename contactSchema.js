const mongoose = require("mongoose");

//schema creation
const  ContactSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    contact:{
        type:Number,
        required:true
    }
})
//model creation
module.exports = mongoose.model("Contact_Data", ContactSchema);