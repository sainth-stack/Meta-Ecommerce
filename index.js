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
app.get('/',(req,res)=>{
    res.send('this from backend')
})

const Port=5000;
app.listen(Port,()=>console.log(`node js server started`))