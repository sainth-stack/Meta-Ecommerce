const bodyParser = require('body-parser')
const express= require ('express')
var userRoutes=require('./routes/userRouter')
var orderRoute=require('./routes/orderRoute')
const app=express()
const cors=require ("cors")
const path =require('path')
app.use(cors({origin:"*"}))

var dbconnection = require('./db')
var productsRoute=require('./routes/productsRoute')
app.use(bodyParser.json())
app.use('/api/products',productsRoute)
app.use('/api/user',userRoutes)
app.use('/api/orders',orderRoute)
if (process.env.NODE_ENV === "production") {
    app.enable("trust proxy");
  
    //Set static folder
    app.use(express.static(path.join(__dirname, "/../client/build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/../client/build/index.html"));
    });
  }

const Port=process.env.PORT || 5000;
app.listen(Port,()=>console.log(`node js server started`))