const mongoose = require ('mongoose')
var mongoDBurl='mongodb+srv://Sai_12345:Sai_12345@cluster0.ucdww.mongodb.net/mern-ecommerce'

mongoose.connect(mongoDBurl,{useUnifiedTopology:true,useNewUrlParser:true})
var dbconnect=mongoose.connection
dbconnect.on('error',()=>{
    console.log('connection failed')
})
dbconnect.on('connected',()=>{
    console.log("connection succesfull")
})
module.exports=mongoose