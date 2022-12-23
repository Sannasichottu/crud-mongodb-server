const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./contact");

//body-parser
app.use(express.json())
//router
app.use("/contact",router)


//mongoose connection
mongoose.connect("mongodb+srv://dhojay:dhojay@cluster0.ebuwxab.mongodb.net/contact?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,},(err)=>{
    if(!err){
        console.log("im connected to database")
    }
    else{
        console.log(err)
    }
})

app.listen(5000,(req,res)=> {
    console.log("I'm listening to port 5000")
})
