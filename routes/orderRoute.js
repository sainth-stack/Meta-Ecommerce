const express = require("express");

const Order = require("../models/orderModel");
const router = express.Router();
const moment = require('moment');

const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51KO1DOSJ31SJjgXl8qdl3FkjrOhWqESi8PA1eYhIX4QdVQ0TKzVauiuGXSXwcVNarYwgVsZROArD9o0KVDOKtLaU00rJWmKqjO"
);
router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;
  console.log(currentUser, "currentUser");
  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  const payment = await stripe.paymentIntents
    .create(
      {
        amount: subtotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    )
    .catch((error) => {
      throw error;
    });

  if (payment) {
    const order = new Order({
      userId: customer.id,
      name: currentUser.username.userName,
      email: currentUser.email.email,
      date:moment(new Date()).format("DD MMMM YYYY hh:mm:ss A"),
      orderItems: cartItems,
      shippingAddress: {
        address: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        postalCode: token.card.address_zip,
      },
      orderAmount: subtotal,
      transactionId: token.id,
      isDelivered: false,
    });
    order.save((err) => {
      if (!err) {
        return res.send("order place successfully");
      } else {
        return res.status(400).json({ message: "someThing went Wrong" });
      }
    });
  } else {
    res.status(400).json({ message: "payment failed" });
  }
});


router.post("/getordersbyuserid",(req,res)=>{
  const userEmail=req.body.userEmail
  Order.find({userEmail:userEmail},(err,docs)=>{
    if(err){
      return res.status(400).json({message:'something went wrong'})
    }else{
      res.send(docs)
    }
  })
  
})

router.post("/getorderbyid",(req,res)=>{
  const orderid=req.body.orderid
  Order.find({_id:orderid},(err,docs)=>{
    console.log(_id,orderid)
    if(err){
      return res.status(400).json({message:'something went wrong'})
    }else{
      res.send(docs[0])
    }
  })
  
})

module.exports = router;
