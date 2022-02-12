const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    conformpassword:{
        type:String,
        requre:true
    }
})
const UserData=mongoose.model('usercollection',userSchema)
module.exports=UserData