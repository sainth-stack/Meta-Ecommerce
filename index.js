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
app.get('/',(req,res)=>{
    res.send('this from backend')
})
if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
}

const Port=process.env.PORT || 5000;
app.listen(Port,()=>console.log(`node js server started`))