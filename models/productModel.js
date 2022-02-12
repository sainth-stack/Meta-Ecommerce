const mongoose = require ('mongoose')
const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    userEmail:{
        type:String,
        require:true
    },
    comment:{
        type:String,
    },
    rating:{
        type:Number,
        require:true
    }
},{
    timeStamps:true
})
const productSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    countInStock:{
        type:Number,
        require:true
    },
    reviews:[reviewSchema]
},{
    timeStamps:true
})
const Product=mongoose.model('products',productSchema)

module.exports=Product