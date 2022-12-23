const express = require('express');
const router = express.Router();
const Contact = require('./contactSchema');

//create
router.post("/create",async(req,res)=>{
    console.log(body)
    var data = new Contact({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.Contact
    })
    await data.save()
    res.json(data)
})

//get all
router.get("/",async(req,res)=> {
    var all = await Contact.find()
    res.json(all)
})

//update
router.put("/update",async(req,res)=>{
    var update = await Contact.cantactOne({_id:req.body._id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            contact:req.body.contact
        }
    })
    res.json(update)
})

//delete
router.delete("/delete/:id",async(req,res)=>{
    console.log(req.params)
    var delData = await Contact/findByIdAndRemove({_id:req.params.id}).then(()=>{
        res.json("Contact deleted")
    })
})

module.exports = router;
