const bodyParser = require('body-parser')
const express= require ('express')
var userRoutes=require('./routes/userRouter')
var orderRoute=require('./routes/orderRoute')
const app=express()
const cors=require ("cors")
app.use(cors({origin:"*"}))

var dbconnection = require('./db')
var productsRoute=require('./routes/productsRoute')
app.use(bodyParser.json())
app.use('/api/products',productsRoute)
app.use('/api/user',userRoutes)
app.use('/api/orders',orderRoute)
if (process.env.NODE_ENV === "production") {
  
    //Set static folder
    app.use(express.static(express.static("/client/build")));
    const path =require('path')

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname ,"client","build","index.html"));
    });
  }

const Port=process.env.PORT || 8000;
app.listen(Port,()=>console.log(`node js server started`))