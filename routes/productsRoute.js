const express=require('express');
const { route } = require('express/lib/application');
const router=express.Router();
const Product=require('../models/productModel')

router.get('/getallproducts',(req,res)=>{
Product.find({},(err,docs)=>{
    if(!err){
        return res.send(docs)
    }
    else{
        return res.status(400).json({message:"something went Wrong"})
    }
})

})

router.post('/getproductbyid',(req,res)=>{
    console.log('hhhhhh')
    Product.find({_id:req.body.productid},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            return res.status(400).json({message:'Something Wrong from getallproductsbyid'})
        }
    })
})


router.post('/addreview',async(req,res)=>{
    const {review,productId,currentUser} =req.body
    const product=await Product.findById({_id:productId})
    console.log(currentUser)
    const reviewModel={
        name:currentUser.username.userName,
        userEmail:currentUser.email.email,
        rating:review.rating,
        comment:review.comment
    }

    product.reviews.push(reviewModel)

var rating=product.reviews.reduce((acc,x)=>acc+x.rating,0)/product.reviews.length
console.log(rating)
    product.rating=rating


    product.save(err=>{
        if(err){
        return res.status(400).json({message:'Something went Wrong'})
        }else{
            res.send('review submitted successfully')
        }
    })

})

module.exports=router;